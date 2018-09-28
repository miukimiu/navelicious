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

var NavbarCustomSectionEL = _styledComponents2.default.section.withConfig({
  displayName: "NavbarCustomSection__NavbarCustomSectionEL",
  componentId: "sc-8mowei-0"
})(["display:flex;justify-content:", ";align-items:center;"], function (props) {
  return props.justify;
});

var NavbarCustomSection = function NavbarCustomSection(_ref) {
  var children = _ref.children,
      justify = _ref.justify;
  return _react2.default.createElement(
    NavbarCustomSectionEL,
    { justify: justify },
    children
  );
};

NavbarCustomSection.defaultProps = {
  justify: "center"
};

NavbarCustomSection.propTypes = {
  /* Mouse leave duration in ms */
  justify: _propTypes2.default.string
};

exports.default = NavbarCustomSection;