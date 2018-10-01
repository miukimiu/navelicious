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

var HeadingEl = _styledComponents.default.h3.withConfig({
  displayName: "Heading__HeadingEl",
  componentId: "l8r8af-0"
})(["text-transform:uppercase;font-weight:bold;font-size:1.1rem;margin-top:0;margin-bottom:", ";color:", ";"], function (props) {
  return props.noMarginBottom ? 0 : "1rem";
}, function (_ref) {
  var color = _ref.color;
  return color ? "red" : "var(--blue)";
});

var Heading = function Heading(_ref2) {
  var children = _ref2.children,
      color = _ref2.color;
  return _react.default.createElement(HeadingEl, {
    color: color
  }, children);
};

var _default = Heading;
exports.default = _default;