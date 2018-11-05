"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkListEl = _styledComponents.default.ul.withConfig({
  displayName: "LinkList__LinkListEl",
  componentId: "o8azel-0"
})(["list-style:none;padding-left:0;li{margin-bottom:1rem;}li:last-of-type{margin-bottom:0;}text-decoration:none;color:#6772e5;margin-left:", ";"], function (props) {
  return props.marginLeft ? props.marginLeft : 0;
});

var LinkList = function LinkList(_ref) {
  var marginLeft = _ref.marginLeft;
  return _react.default.createElement(LinkListEl, {
    marginLeft: marginLeft
  }, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Stripe Atlas \u203A")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Stripe Home \u203A")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Improved Fraud Detection \u203A")));
};

var _default = LinkList;
exports.default = _default;