"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"], ["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"], ["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownSection = _styledComponents2.default.div(_templateObject);

var Icon = _styledComponents2.default.div(_templateObject2);

var CompanyDropdown = function CompanyDropdown() {
  return _react2.default.createElement(
    _index.DropdownContent,
    { width: "29rem" },
    _react2.default.createElement(
      DropdownSection,
      { "data-first-dropdown-section": true },
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          _index.HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            " About Stripe"
          )
        ),
        _react2.default.createElement(
          _index.HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            "Customers"
          )
        ),
        _react2.default.createElement(
          _index.HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            "Jobs"
          )
        ),
        _react2.default.createElement(
          _index.HeadingLink,
          { noMarginBottom: true },
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            "Environment"
          )
        )
      )
    ),
    _react2.default.createElement(
      DropdownSection,
      null,
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _index.Heading,
          null,
          _react2.default.createElement(Icon, null),
          "From the Blog"
        ),
        _react2.default.createElement(
          _index.LinkList,
          { marginLeft: "25px" },
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
        )
      )
    )
  );
};

exports.default = CompanyDropdown;