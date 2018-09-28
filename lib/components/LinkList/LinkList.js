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

var LinkListEl = _styledComponents2.default.ul.withConfig({
  displayName: "LinkList__LinkListEl",
  componentId: "oijxr9-0"
})(["list-style:none;padding-left:0;li{margin-bottom:1rem;}li:last-of-type{margin-bottom:0;}text-decoration:none;color:#6772e5;margin-left:", ";"], function (props) {
  return props.marginLeft ? props.marginLeft : 0;
});

var LinkList = function LinkList(_ref) {
  var marginLeft = _ref.marginLeft;
  return _react2.default.createElement(
    LinkListEl,
    { marginLeft: marginLeft },
    _react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        "a",
        { href: "/" },
        "Stripe Atlas \u203A"
      )
    ),
    _react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        "a",
        { href: "/" },
        "Stripe Home \u203A"
      )
    ),
    _react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        "a",
        { href: "/" },
        "Improved Fraud Detection \u203A"
      )
    )
  );
};

exports.default = LinkList;