"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  width: ", ";\n  padding: ", ";\n"], ["\n  width: ", ";\n  padding: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFlipToolkit = require("react-flip-toolkit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownContentEl = _styledComponents2.default.div(_templateObject, function (_ref) {
  var width = _ref.width;
  return "" + width;
}, function (props) {
  return props.padding;
});

var DropdownContent = function DropdownContent(_ref2) {
  var width = _ref2.width,
      children = _ref2.children,
      padding = _ref2.padding;

  return _react2.default.createElement(
    DropdownContentEl,
    { width: width, padding: padding },
    children
  );
};

exports.default = DropdownContent;