webpackHotUpdate("static/development/pages/index.js",{

/***/ "./command/createDva.js":
/*!******************************!*\
  !*** ./command/createDva.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/_antd@3.19.3@antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/_antd@3.19.3@antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api */ "./command/api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@5.1.1@react-redux/es/index.js");
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! dva-no-router */ "./node_modules/_dva-no-router@1.2.1@dva-no-router/index.js");
/* harmony import */ var dva_no_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(dva_no_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _netTool__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./netTool */ "./command/netTool.js");
/* harmony import */ var _models_fetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../models/fetch */ "./models/fetch.js");
/* harmony import */ var _apiTool__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./apiTool */ "./command/apiTool.js");






















var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var app = null; // eslint-disable-next-line

var __NEXT_DVA_STORE__ = '__NEXT_DVA_STORE__';

var regModel = function regModel(modelList) {
  modelList.forEach(function (e) {
    if (app && app._models && app._models.findIndex(function (el) {
      return el.namespace == e;
    }) == -1) {
      debugger;
      app.model({
        namespace: e,
        state: {
          isShow: true
        },
        reducers: {
          setValue: function setValue(state, _ref) {
            var payload = _ref.payload;
            console.log('输出赋值', state, payload);
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_13__["default"])({}, state, payload);
          },
          clear: function clear(state, _ref2) {
            var payload = _ref2.payload;
            return {
              isShow: true
            };
          }
        },
        effect: {},
        subscriptions: {}
      });
    }
  });
};

function createDvaStore(initialState, modelList) {
  console.log('输出modellIST', modelList);

  if (initialState) {
    app = dva_no_router__WEBPACK_IMPORTED_MODULE_17___default()({
      initialState: initialState
    });
    regModel(modelList);
  } else {
    app = dva_no_router__WEBPACK_IMPORTED_MODULE_17___default()({});
    regModel(modelList);
  }

  app.model(Object(_models_fetch__WEBPACK_IMPORTED_MODULE_19__["default"])({
    netTool: _netTool__WEBPACK_IMPORTED_MODULE_18__,
    onGLNetStart: function onGLNetStart(_ref3) {
      var retData = _ref3.retData;

      if (retData.code === 200 || retData.status === 0) {
        return retData;
      }

      return false;
    },
    onGLNetError: function onGLNetError(_ref4) {
      var retData = _ref4.retData,
          url = _ref4.url;

      antd_lib_message__WEBPACK_IMPORTED_MODULE_12___default.a.error(retData.msg || retData.message);
    },
    onGLNetCatch: function onGLNetCatch(_ref5) {
      var error = _ref5.error;
      console.log('接口异常输出', error);
    }
  }));
  app.router(function () {});
  app.start();
  return app;
}

function getOrCreateStore(initialState, modelList) {
  if (!app) {
    return createDvaStore(initialState, modelList)._store;
  } else {
    console.log('输出app123', app, modelList);
    regModel(modelList);
    return app._store;
  }
}

function createDva(modelList) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref6$option = _ref6.option,
      option = _ref6$option === void 0 ? {} : _ref6$option;

  var DvaView =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(DvaView, _React$Component);

    function DvaView(props) {
      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DvaView);

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(DvaView).call(this, props));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "getModalName", function () {
        return _this.props.modelList[0];
      });

      _this.ComponentS = _this.props.Component;
      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DvaView, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.isDestroy) {
          _apiTool__WEBPACK_IMPORTED_MODULE_20__["default"].clearList(this, this.props.modelList);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            Component = _this$props.Component,
            modelList = _this$props.modelList,
            arg = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props, ["Component", "modelList"]);

        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, arg, {
          modelList: modelList
        }));
      }
    }]);

    return DvaView;
  }(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(DvaView, "defaultProps", {
    isDestroy: true
  });

  return function (Component) {
    var ComponentWithDva = function ComponentWithDva() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var context = arguments.length > 1 ? arguments[1] : undefined;

      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState,
          arg = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["store", "initialProps", "initialState"]);

      var ComponentView = Object(dva_no_router__WEBPACK_IMPORTED_MODULE_17__["connect"])(function (state) {
        var obj = {};
        modelList.forEach(function (e) {
          obj = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_13__["default"])({}, obj, state[e]);
        });
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_13__["default"])({}, obj, {
          Component: Component,
          modelList: modelList
        });
      }, null, null, option)(DvaView);
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_16__["Provider"], {
        store: getOrCreateStore(initialState, modelList)
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(ComponentView, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_13__["default"])({}, initialProps, arg)));
    };

    ComponentWithDva.getInitialProps =
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var props,
          isServer,
          store,
          initialProps,
          _args = arguments;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              props = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              isServer = checkServer();
              store = getOrCreateStore(props.req, modelList);

              if (!Component.getInitialProps) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return Component.getInitialProps(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_13__["default"])({}, props, {
                isServer: isServer,
                store: store
              }));

            case 6:
              _context.t0 = _context.sent;
              _context.next = 10;
              break;

            case 9:
              _context.t0 = {};

            case 10:
              initialProps = _context.t0;
              return _context.abrupt("return", {
                store: store,
                initialProps: initialProps,
                initialState: store.getState()
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return ComponentWithDva;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createDva);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.29.0@webpack/buildin/global.js */ "./node_modules/_webpack@4.29.0@webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.a933cfbb6b2e09199a9c.hot-update.js.map