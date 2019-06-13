webpackHotUpdate("static/development/pages/index.js",{

/***/ "./command/apiTool.js":
/*!****************************!*\
  !*** ./command/apiTool.js ***!
  \****************************/
/*! exports provided: send, setValue, clearList, showModal, getRouterParams, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearList", function() { return clearList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterParams", function() { return getRouterParams; });
// 发送接口请求
var send = function send(thz, payload) {
  thz.props.dispatch({
    type: 'fetch/send',
    payload: payload
  });
}; // 对指定的model进行赋值

var setValue = function setValue(thz, modelName, payload) {
  thz.props.dispatch({
    type: "".concat(modelName, "/setValue"),
    payload: payload
  });
}; // 清除model列表

var clearList = function clearList(thz, payload) {
  payload.forEach(function (e) {
    thz.props.dispatch({
      type: "".concat(e, "/clear")
    });
  });
}; // 显示modal

var showModal = function showModal(thz, modelName) {
  thz.props.dispatch({
    type: "".concat(modelName, "/setValue"),
    payload: {
      isShowModal: true
    }
  });
}; // 获取路由参数

var getRouterParams = function getRouterParams(thz) {
  return thz.props.routerParams;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  send: send,
  setValue: setValue,
  clearList: clearList,
  getRouterParams: getRouterParams
});

/***/ })

})
//# sourceMappingURL=index.js.5c6bd6d951b0cb435536.hot-update.js.map