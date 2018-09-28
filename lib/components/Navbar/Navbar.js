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

var _ThemeContext = require("../../core/ThemeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarEl = _styledComponents2.default.div.withConfig({
  displayName: "Navbar__NavbarEl",
  componentId: "sc-1kw63p3-0"
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
  return _react2.default.createElement(
    _ThemeContext.ThemeProvider,
    { value: { background: background } },
    _react2.default.createElement(
      NavbarEl,
      { justify: justify, background: background, className: className },
      children
    )
  );
};

Navbar.defaultProps = {
  justify: "center",
  background: "#E8E8E8"
};

Navbar.propTypes = {
  /* Mouse leave duration in ms */
  background: _propTypes2.default.string,
  justify: _propTypes2.default.string
};

exports.default = Navbar;