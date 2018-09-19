"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"], ["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"], ["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  > div:first-of-type {\n    margin-right: 48px;\n  }\n"], ["\n  display: flex;\n  > div:first-of-type {\n    margin-right: 48px;\n  }\n"]);

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

var Flex = _styledComponents2.default.div(_templateObject3);

var DevelopersDropdown = function DevelopersDropdown() {
  return _react2.default.createElement(
    _index.DropdownContent,
    { width: "25rem" },
    _react2.default.createElement(
      DropdownSection,
      { "data-first-dropdown-section": true },
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _index.Heading,
          null,
          "Documentation"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Start integrating Stripe\u2019s products and tools"
        ),
        _react2.default.createElement(
          Flex,
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "h4",
              null,
              "Get Started"
            ),
            _react2.default.createElement(
              _index.LinkList,
              null,
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/" },
                  "Elements"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/" },
                  "Checkout"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/" },
                  "Mobile apps"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "h4",
              null,
              "Popular Topics"
            ),
            _react2.default.createElement(
              _index.LinkList,
              null,
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/" },
                  "Apple Pay"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/" },
                  "Testing"
                )
              ),
              _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/" },
                  "Launch Checklist"
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      DropdownSection,
      null,
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
            " Full API Reference"
          )
        ),
        _react2.default.createElement(
          _index.HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            " API Status"
          )
        ),
        _react2.default.createElement(
          _index.HeadingLink,
          { noMarginBottom: true },
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            " Open Source"
          )
        )
      )
    )
  );
};

exports.default = DevelopersDropdown;