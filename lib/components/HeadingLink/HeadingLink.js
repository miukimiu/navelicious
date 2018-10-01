"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = _styledComponents.default.h3.withConfig({
  displayName: "HeadingLink__Heading",
  componentId: "sc-1fiqrk-0"
})(["text-transform:uppercase;font-weight:bold;font-size:1.1rem;margin-top:0;margin-bottom:", ";color:", ";"], function (props) {
  return props.noMarginBottom ? 0 : "1rem";
}, function (_ref) {
  var color = _ref.color;
  return color ? "var(--".concat(color, ")") : "var(--blue)";
});

var HeadingLinkEl = Heading.withComponent("li");

var HeadingLink = function HeadingLink(_ref2) {
  var chilren = _ref2.chilren;
  return _react.default.createElement(HeadingLinkEl, null, chilren);
};

var _default = HeadingLink;
exports.default = _default;