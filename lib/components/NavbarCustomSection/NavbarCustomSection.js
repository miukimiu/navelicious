"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarCustomSectionEL = _styledComponents.default.section.withConfig({
  displayName: "NavbarCustomSection__NavbarCustomSectionEL",
  componentId: "sc-1v0zwk1-0"
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
  justify: 'center'
};
NavbarCustomSection.propTypes = {
  justify: _propTypes.default.string
};
var _default = NavbarCustomSection;
exports.default = _default;