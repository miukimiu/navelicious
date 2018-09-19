"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"], ["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"], ["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  li {\n    display: flex;\n    margin-bottom: 1rem;\n  }\n  h3 {\n    margin-right: 1rem;\n    width: 3.2rem;\n    display: block;\n  }\n  a {\n    color: var(--dark-grey);\n  }\n"], ["\n  li {\n    display: flex;\n    margin-bottom: 1rem;\n  }\n  h3 {\n    margin-right: 1rem;\n    width: 3.2rem;\n    display: block;\n  }\n  a {\n    color: var(--dark-grey);\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  li {\n    display: flex;\n  }\n"], ["\n  li {\n    display: flex;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  width: 38px;\n  height: 38px;\n  margin-right: 16px;\n  border-radius: 100%;\n  opacity: 0.6;\n  background-color: ", ";\n"], ["\n  width: 38px;\n  height: 38px;\n  margin-right: 16px;\n  border-radius: 100%;\n  opacity: 0.6;\n  background-color: ", ";\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n border-top: 2px solid #fff;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: var(--spacer);\n  padding-top: var(--spacer);\n}\nh3 {\n  margin-bottom: 0;\n}\n"], ["\n border-top: 2px solid #fff;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: var(--spacer);\n  padding-top: var(--spacer);\n}\nh3 {\n  margin-bottom: 0;\n}\n"]);

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

var SubProductsList = _styledComponents2.default.ul(_templateObject3);

var ProductsSection = _styledComponents2.default.ul(_templateObject4);

var Logo = _styledComponents2.default.div(_templateObject5, function (_ref) {
  var color = _ref.color;
  return "var(--" + color + ")";
});

var WorksWithStripe = _styledComponents2.default.div(_templateObject6);

var ProductsDropdown = function ProductsDropdown() {
  return _react2.default.createElement(
    _index.DropdownContent,
    { width: "30rem" },
    _react2.default.createElement(
      DropdownSection,
      { "data-first-dropdown-section": true },
      _react2.default.createElement(
        ProductsSection,
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(Logo, { color: "blue" })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _index.Heading,
              { color: "blue" },
              "Payments"
            ),
            _react2.default.createElement(
              "p",
              null,
              "A complete payments platform"
            )
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(Logo, { color: "green" })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _index.Heading,
              { color: "green" },
              "Billing"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Build and scale your recurring business model"
            )
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(Logo, { color: "teal" })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _index.Heading,
              { color: "teal" },
              "Connect"
            ),
            _react2.default.createElement(
              "p",
              { style: { marginBottom: 0 } },
              "Everything platforms need to get sellers paid"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      DropdownSection,
      null,
      _react2.default.createElement(
        SubProductsList,
        null,
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _index.Heading,
            { noMarginBottom: true },
            "Sigma"
          ),
          _react2.default.createElement(
            "div",
            null,
            "Your business data at your fingertips."
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _index.Heading,
            { noMarginBottom: true },
            "Atlas"
          ),
          _react2.default.createElement(
            "div",
            null,
            "The best way to start an internet business."
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            _index.Heading,
            { noMarginBottom: true },
            "Radar"
          ),
          _react2.default.createElement(
            "div",
            null,
            "Fight fraud with machine learning."
          )
        )
      ),
      _react2.default.createElement(
        WorksWithStripe,
        null,
        _react2.default.createElement(
          _index.Heading,
          { noMarginBottom: true },
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            " Works with Stripe"
          )
        )
      )
    )
  );
};

exports.default = ProductsDropdown;