"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.1rem;\n  margin-top: 0;\n  margin-bottom: ", ";\n  color: ", ";\n"], ["\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.1rem;\n  margin-top: 0;\n  margin-bottom: ", ";\n  color: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = _styledComponents2.default.h3(_templateObject, function (props) {
  return props.noMarginBottom ? 0 : "1rem";
}, function (_ref) {
  var color = _ref.color;
  return color ? "var(--" + color + ")" : "var(--blue)";
});

var HeadingLinkEl = Heading.withComponent("li");

var HeadingLink = function HeadingLink(_ref2) {
  var chilren = _ref2.chilren;
  return _react2.default.createElement(
    HeadingLinkEl,
    null,
    chilren
  );
};

exports.default = HeadingLink;