// 延迟处理
export const delay = time => new Promise(resolve => setTimeout(resolve, time));

const dev = false;

// url转换
const tranUrlFun = function (urlAddress = '', params) {
  let url = urlAddress;
  Object.keys(params).forEach((e) => {
    const text = url.replace(`{${e}}`, (data) => {
      const text = params[e];
      delete params[e];
      return text;
    });
    url = text == urlAddress ? url : text;
  });
  return url;
};

export const setValue = function setValue(state, { payload }) {
  return { ...state, ...payload };
};

const tranDataSource = function (data) {
  if (data && data.dataSource) {
    const obj = {};
    Object.keys(data.dataSource).forEach((e) => {
      obj[e] = {
        value: data.dataSource[e],
      };
    });
    return { ...data, newDataSource: obj };
  }
  return data;
};

export default function getFetchData(fetchConfig) {
  const {
    netTool,
    netApi,
    converData,
    onGLNetStart,
    onGLNetFinall,
    onGLNetError,
    onGLNetCatch,
    onGLTimeOut,
    extendAttr,
    GLParams,
    GLTimeOut,
    mockTool
  } = fetchConfig;
  return {
    namespace: 'fetch',
    state: {
      isShow: true, // true显示loading
      isNetError: false, // 是否网络出错
      isNetData: {}, // 出错的单条网络数据
    },
    reducers: {
      setValue(state, { payload }) {
        return { ...state, ...payload };
      },
    },
    effects: {
      * send({ payload }, {
        call, select, race, take, put,
      }) {
        try {
          // 这里保存最后需要合并的数据
          const ret = {};
          const keys = payload;
          yield put({
            type: 'setValue',
            payload: { isShow: true, netError: false },
          });
          for (let i = 0; i < keys.length; i++) {
            const obj = keys[i];
            const keyName = obj.target;
            const url = obj.url;
            const params = GLParams
              ? { ...obj.params, ...GLParams }
              : obj.params;
            const timeOut = obj.timeOut || (GLTimeOut || 100000);
            const tranData = obj.tranData;
            const tranUrl = obj.transUrl;
            const method = obj.method || 'POST';
            const isOnlyNet = obj.isOnlyNet || false;
            const onError = obj.onError;
            const onCallBack = obj.onCallBack;
            const changeOrigin = obj.changeOrigin;
            const converType = obj.converType;
            const host = obj.host ? obj.host : '/api';
            const base = obj.base;
            const appname = obj.appName;
            const mock = obj.mock
            if (mock) {
              ret[keyName] = mockTool[mock](obj)
              continue
            }
            if (url) {
              let urlAddress = netApi
                ? netApi[url]
                : dev
                  ? `/${url}`
                  : base
                    ? base + url
                    : url;
              urlAddress = tranUrl ? tranUrlFun(url, params) : urlAddress;
              // const retData = yield call(netTool[method],urlAddress,params)
              const { retData, timeout, cancel } = yield race({
                retData: call(
                  netTool[method],
                  host,
                  urlAddress,
                  typeof params === 'function' ? params(ret) : params,
                  appname,
                ),
                timeout: call(delay, timeOut || 10000),
                cancel: take('CANCEL_FETCH'),
              });
              if (cancel) {
                break;
              }
              if (!timeout) {
                const netData = onGLNetStart && onGLNetStart({ retData, ...extendAttr });
                if (netData) {
                  yield put({
                    type: 'setValue',
                    payload: { isShow: true, isNetError: false },
                  });
                  if (!isOnlyNet) {
                    const oldState = yield select(state => ({
                      ...state[keyName],
                    }));
                    if (tranData) {
                      ret[keyName] = Object.assign(
                        {},
                        oldState,
                        ret[keyName],
                        tranData
                          ? tranDataSource(tranData(netData, ret[keyName] || oldState || {}))
                          : netData,
                      );
                    } else {
                      ret[keyName] = Object.assign(
                        {},
                        oldState,
                        ret[keyName],
                        converType
                          ? converData[converType](netData, converType)
                          : netData,
                      );
                    }

                    onCallBack
                      && onCallBack({
                        ...obj,
                        retData: { ...ret[keyName] },
                        ...extendAttr,
                        params,
                        timeOut,
                        urlAddress,
                        ret: ret[keyName],
                      }, ret[keyName]);
                  } else {
                    onCallBack
                      && onCallBack({
                        ...obj,
                        retData: tranData ? tranDataSource(tranData(netData)) : netData,
                        ...extendAttr,
                        params,
                        timeOut,
                        urlAddress,
                        ret: ret[keyName],
                      }, ret[keyName]);
                  }
                } else {
                  yield put({
                    type: 'setValue',
                    payload: {
                      isShow: true,
                      isNetError: true,
                      isNetErrorData: payload,
                    },
                  });
                  if (onError) {
                    const errorData = onError({ ...obj, ...extendAttr, retData, params, timeOut, urlAddress })
                    if (errorData) {
                      ret[keyName] = { ...ret[keyName],...errorData}
                    }
                  }else {
                    onGLNetError
                      && onGLNetError({
                        ...obj,
                        ...extendAttr,
                        retData,
                        params,
                        timeOut,
                        urlAddress,
                        url,
                      });
                  }
                  break;
                }
                onGLNetFinall
                  && onGLNetFinall({
                    ...obj,
                    ...extendAttr,
                    retData,
                    params,
                    timeOut,
                    urlAddress,
                  });
              } else {
                yield put({
                  type: 'setValue',
                  payload: {
                    isShow: true,
                    isNetError: true,
                    isNetErrorData: payload,
                  },
                });
                onGLTimeOut
                  && onGLTimeOut({
                    ...obj,
                    ...extendAttr,
                    retData,
                    params,
                    timeOut,
                    urlAddress,
                  });
                break;
              }
            }
          }
          const retKeys = Object.keys(ret);
          if (retKeys.length > 0) {
            for (let i = 0; i < retKeys.length; i++) {
              const retKeyName = retKeys[i];
              const retObj = ret[retKeyName];
              yield put({
                type: `${retKeyName}/setValue`,
                payload: { isShow: true },
              });
              yield put({
                type: `${retKeyName}/setValue`,
                payload: { ...retObj, isShow: false },
              });
            }
          }
          yield put({ type: 'setValue', payload: { isShow: false } });
        } catch (error) {
          onGLNetCatch && onGLNetCatch({ error, ...extendAttr });
        }
      },
    },
  };
}
