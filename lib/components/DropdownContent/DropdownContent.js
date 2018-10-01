"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactFlipToolkit = require("react-flip-toolkit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DropdownContentEl = _styledComponents.default.div.withConfig({
  displayName: "DropdownContent__DropdownContentEl",
  componentId: "sc-1fsubqs-0"
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

var _default = DropdownContent;
exports.default = _default;