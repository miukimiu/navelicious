"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownContentEl = _styledComponents.default.div.withConfig({
  displayName: "DropdownContent__DropdownContentEl",
  componentId: "sc-1xk563p-0"
})(["width:", ";padding:", ";"], function (_ref) {
  var width = _ref.width;
  return "".concat(width);
}, function (props) {
  return props.padding;
});

var DropdownContent = function DropdownContent(_ref2) {
  var width = _ref2.width,
      children = _ref2.children,
      padding = _ref2.padding;
  return _react.default.createElement(DropdownContentEl, {
    width: width,
    padding: padding
  }, children);
};

DropdownContent.defaultProps = {
  width: '100px',
  padding: '5px'
};
DropdownContent.propTypes = {
  justify: _propTypes.default.string,
  padding: _propTypes.default.string
};
var _default = DropdownContent;
exports.default = _default;