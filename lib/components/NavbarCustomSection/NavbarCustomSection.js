"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarCustomSectionEL = _styledComponents.default.section.withConfig({
  displayName: "NavbarCustomSection__NavbarCustomSectionEL",
  componentId: "sc-8mowei-0"
})(["display:flex;justify-content:", ";align-items:center;"], function (props) {
  return props.justify;
});

var NavbarCustomSection = function NavbarCustomSection(_ref) {
  var children = _ref.children,
      justify = _ref.justify;
  return _react.default.createElement(NavbarCustomSectionEL, {
    justify: justify
  }, children);
};

NavbarCustomSection.defaultProps = {
  justify: "center"
};
NavbarCustomSection.propTypes = {
  /* Mouse leave duration in ms */
  justify: _propTypes.default.string
};
var _default = NavbarCustomSection;
exports.default = _default;