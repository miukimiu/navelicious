"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = _styledComponents2.default.h3.withConfig({
  displayName: "HeadingLink__Heading",
  componentId: "sc-1fiqrk-0"
})(["text-transform:uppercase;font-weight:bold;font-size:1.1rem;margin-top:0;margin-bottom:", ";color:", ";"], function (props) {
  return props.noMarginBottom ? 0 : "1rem";
}, function (_ref) {
  var color = _ref.color;
  return color ? "var(--" + color + ")" : "var(--blue)";
});

var HeadingLinkEl = Heading.withComponent("li");

var HeadingLink = function HeadingLink(_ref2) {
  var chilren = _ref2.chilren;
  return _react2.default.createElement(
    HeadingLinkEl,
    null,
    chilren
  );
};

exports.default = HeadingLink;