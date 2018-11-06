"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../../core/ThemeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarEl = _styledComponents.default.div.withConfig({
  displayName: "Navbar__NavbarEl",
  componentId: "uawuak-0"
})(["display:flex;justify-content:", ";background:", ";z-index:999;"], function (props) {
  return props.justify;
}, function (props) {
  return props.background;
});

var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      justify = _ref.justify,
      background = _ref.background,
      className = _ref.className;
  return _react.default.createElement(_ThemeContext.ThemeProvider, {
    value: {
      background: background
    }
  }, _react.default.createElement(NavbarEl, {
    justify: justify,
    background: background,
    className: className
  }, children));
};

Navbar.defaultProps = {
  justify: "center",
  background: "#999"
};
Navbar.propTypes = {
  /* Mouse leave duration in ms */
  background: _propTypes.default.string,
  justify: _propTypes.default.string
};
var _default = Navbar;
exports.default = _default;