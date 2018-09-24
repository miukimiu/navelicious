"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: ", ";\n  background: ", ";\n"], ["\n  display: flex;\n  justify-content: ", ";\n  background: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarEl = _styledComponents2.default.div(_templateObject, function (props) {
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
    NavbarEl,
    { justify: justify, background: background, className: className },
    children
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