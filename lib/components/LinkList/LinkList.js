"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var LinkListEl = _styledComponents.default.ul.withConfig({
  displayName: "LinkList__LinkListEl",
  componentId: "oijxr9-0"
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