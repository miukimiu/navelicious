"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadingEl = _styledComponents.default.h3.withConfig({
  displayName: "Heading__HeadingEl",
  componentId: "sc-14z89m9-0"
})(["text-transform:uppercase;font-weight:bold;font-size:1.1rem;margin-top:0;margin-bottom:", ";color:", ";"], function (props) {
  return props.noMarginBottom ? 0 : '1rem';
}, function (_ref) {
  var color = _ref.color;
  return color ? "red" : 'var(--blue)';
});

var Heading = function Heading(_ref2) {
  var children = _ref2.children,
      color = _ref2.color;
  return _react.default.createElement(HeadingEl, {
    color: color
  }, children);
};

Heading.defaultProps = {
  color: '#000'
};
Heading.propTypes = {
  color: _propTypes.default.string
};
var _default = Heading;
exports.default = _default;