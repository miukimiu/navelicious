"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  transform-origin: 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  top: -20px;\n"], ["\n  transform-origin: 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  top: -20px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent var(--white);\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n"], ["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent var(--white);\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  transform-origin: 0 0;\n  background-color: var(--white);\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n"], ["\n  transform-origin: 0 0;\n  background-color: var(--white);\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.1rem;\n  margin-top: 0;\n  margin-bottom: ", ";\n  color: ", ";\n"], ["\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.1rem;\n  margin-top: 0;\n  margin-bottom: ", ";\n  color: ", ";\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  li {\n    margin-bottom: 1rem;\n  }\n\n  li:last-of-type {\n    margin-bottom: 0;\n  }\n\n  margin-left: ", ";\n"], ["\n  li {\n    margin-bottom: 1rem;\n  }\n\n  li:last-of-type {\n    margin-bottom: 0;\n  }\n\n  margin-left: ", ";\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"], ["\n  width: 13px;\n  height: 13px;\n  margin-right: 13px;\n  background-color: var(--blue);\n  opacity: 0.8;\n  display: inline-block;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"], ["\n  padding: var(--spacer);\n  position: relative;\n  z-index: 1;\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  width: 18.5rem;\n"], ["\n  width: 18.5rem;\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  width: 25rem;\n"], ["\n  width: 25rem;\n"]),
    _templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  > div:first-of-type {\n    margin-right: 48px;\n  }\n"], ["\n  display: flex;\n  > div:first-of-type {\n    margin-right: 48px;\n  }\n"]),
    _templateObject11 = _taggedTemplateLiteral(["\n  width: 29rem;\n"], ["\n  width: 29rem;\n"]),
    _templateObject12 = _taggedTemplateLiteral(["\n  width: 38px;\n  height: 38px;\n  margin-right: 16px;\n  border-radius: 100%;\n  opacity: 0.6;\n  background-color: ", ";\n"], ["\n  width: 38px;\n  height: 38px;\n  margin-right: 16px;\n  border-radius: 100%;\n  opacity: 0.6;\n  background-color: ", ";\n"]),
    _templateObject13 = _taggedTemplateLiteral(["\n  li {\n    display: flex;\n    margin-bottom: 1rem;\n  }\n  h3 {\n    margin-right: 1rem;\n    width: 3.2rem;\n    display: block;\n  }\n  a {\n    color: var(--dark-grey);\n  }\n"], ["\n  li {\n    display: flex;\n    margin-bottom: 1rem;\n  }\n  h3 {\n    margin-right: 1rem;\n    width: 3.2rem;\n    display: block;\n  }\n  a {\n    color: var(--dark-grey);\n  }\n"]),
    _templateObject14 = _taggedTemplateLiteral(["\n  li {\n    display: flex;\n  }\n"], ["\n  li {\n    display: flex;\n  }\n"]),
    _templateObject15 = _taggedTemplateLiteral(["\n border-top: 2px solid #fff;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: var(--spacer);\n  padding-top: var(--spacer);\n}\nh3 {\n  margin-bottom: 0;\n}\n"], ["\n border-top: 2px solid #fff;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: var(--spacer);\n  padding-top: var(--spacer);\n}\nh3 {\n  margin-bottom: 0;\n}\n"]),
    _templateObject16 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: bold;\n  border: none;\n  font-size: 18px;\n  padding: 1.5rem;\n  color: white;\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  &:hover,\n  &:focus {\n    opacity: 0.7;\n    outline: none;\n  }\n"], ["\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: bold;\n  border: none;\n  font-size: 18px;\n  padding: 1.5rem;\n  color: white;\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  &:hover,\n  &:focus {\n    opacity: 0.7;\n    outline: none;\n  }\n"]),
    _templateObject17 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"], ["\n  position: relative;\n  cursor: pointer;\n"]),
    _templateObject18 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  perspective: 1500px;\n"], ["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  perspective: 1500px;\n"]),
    _templateObject19 = _taggedTemplateLiteral(["\n  margin: auto;\n"], ["\n  margin: auto;\n"]),
    _templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n"], ["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n"]),
    _templateObject21 = _taggedTemplateLiteral(["\n  padding: 1.5rem 0 0.5rem 0;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n\n  > div {\n    display: flex;\n  }\n\n  fieldset {\n    border: 0;\n    padding: 1rem 0 1rem 0;\n    margin-right: 3rem;\n  }\n\n  legend {\n    font-weight: bold;\n    display: block;\n  }\n  input {\n    margin-right: 0.5rem;\n  }\n  label + label input {\n    margin-left: 1.5rem;\n  }\n"], ["\n  padding: 1.5rem 0 0.5rem 0;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n\n  > div {\n    display: flex;\n  }\n\n  fieldset {\n    border: 0;\n    padding: 1rem 0 1rem 0;\n    margin-right: 3rem;\n  }\n\n  legend {\n    font-weight: bold;\n    display: block;\n  }\n  input {\n    margin-right: 0.5rem;\n  }\n  label + label input {\n    margin-left: 1.5rem;\n  }\n"]),
    _templateObject22 = _taggedTemplateLiteral(["\n  background: #53f;\n  // background: linear-gradient(150deg, #53f 15%, #05d5ff);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n\n  > div:first-of-type {\n    flex: 1 0 70vh;\n  }\n"], ["\n  background: #53f;\n  // background: linear-gradient(150deg, #53f 15%, #05d5ff);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n\n  > div:first-of-type {\n    flex: 1 0 70vh;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFlipToolkit = require("react-flip-toolkit");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // const { Component, Children, cloneElement } = window.React;
// const { keyframes, default: styled } = window.styled;

var DropdownRoot = _styledComponents2.default.div(_templateObject);
var Caret = _styledComponents2.default.div(_templateObject2);

var DropdownBackground = _styledComponents2.default.div(_templateObject3);

var DropdownContainer = function (_Component) {
  _inherits(DropdownContainer, _Component);

  function DropdownContainer() {
    _classCallCheck(this, DropdownContainer);

    return _possibleConstructorReturn(this, (DropdownContainer.__proto__ || Object.getPrototypeOf(DropdownContainer)).apply(this, arguments));
  }

  _createClass(DropdownContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          direction = _props.direction,
          animatingOut = _props.animatingOut,
          tweenConfig = _props.tweenConfig;

      return _react2.default.createElement(
        DropdownRoot,
        {
          direction: direction,
          animatingOut: animatingOut,
          duration: tweenConfig.duration
        },
        _react2.default.createElement(
          _reactFlipToolkit.Flipped,
          { flipId: "dropdown-caret" },
          _react2.default.createElement(Caret, null)
        ),
        _react2.default.createElement(
          _reactFlipToolkit.Flipped,
          { flipId: "dropdown" },
          _react2.default.createElement(
            DropdownBackground,
            null,
            _react2.default.createElement(
              _reactFlipToolkit.Flipped,
              { inverseFlipId: "dropdown", scale: true },
              _react2.default.createElement(
                "div",
                null,
                this.props.children
              )
            )
          )
        )
      );
    }
  }]);

  return DropdownContainer;
}(_react.Component);

DropdownContainer.propTypes = {
  children: _propTypes2.default.node.isRequired,
  animatingOut: _propTypes2.default.bool,
  direction: _propTypes2.default.oneOf(["left", "right"]),
  tweenConfig: _propTypes2.default.shape({
    duration: _propTypes2.default.number,
    easing: _propTypes2.default.string
  })
};


var Heading = _styledComponents2.default.h3(_templateObject4, function (props) {
  return props.noMarginBottom ? 0 : "1rem";
}, function (_ref) {
  var color = _ref.color;
  return color ? "var(--" + color + ")" : "var(--blue)";
});

var HeadingLink = Heading.withComponent("li");

var LinkList = _styledComponents2.default.ul(_templateObject5, function (props) {
  return props.marginLeft ? props.marginLeft : 0;
});

var Icon = _styledComponents2.default.div(_templateObject6);

var DropdownSection = _styledComponents2.default.div(_templateObject7);

var CompanyDropdownEl = _styledComponents2.default.div(_templateObject8);

var CompanyDropdown = function CompanyDropdown() {
  return _react2.default.createElement(
    CompanyDropdownEl,
    null,
    _react2.default.createElement(
      DropdownSection,
      { "data-first-dropdown-section": true },
      _react2.default.createElement(
        "ul",
        null,
        _react2.default.createElement(
          HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            " About Stripe"
          )
        ),
        _react2.default.createElement(
          HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            "Customers"
          )
        ),
        _react2.default.createElement(
          HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            "Jobs"
          )
        ),
        _react2.default.createElement(
          HeadingLink,
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
          Heading,
          null,
          _react2.default.createElement(Icon, null),
          "From the Blog"
        ),
        _react2.default.createElement(
          LinkList,
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

var DevelopersDropdownEl = _styledComponents2.default.div(_templateObject9);

var Flex = _styledComponents2.default.div(_templateObject10);

var DevelopersDropdown = function DevelopersDropdown() {
  return _react2.default.createElement(
    DevelopersDropdownEl,
    null,
    _react2.default.createElement(
      DropdownSection,
      { "data-first-dropdown-section": true },
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          Heading,
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
              LinkList,
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
              LinkList,
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
          HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            " Full API Reference"
          )
        ),
        _react2.default.createElement(
          HeadingLink,
          null,
          _react2.default.createElement(
            "a",
            { href: "/" },
            _react2.default.createElement(Icon, null),
            " API Status"
          )
        ),
        _react2.default.createElement(
          HeadingLink,
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

var ProductsDropdownEl = _styledComponents2.default.div(_templateObject11);

var Logo = _styledComponents2.default.div(_templateObject12, function (_ref2) {
  var color = _ref2.color;
  return "var(--" + color + ")";
});

var SubProductsList = _styledComponents2.default.ul(_templateObject13);

var ProductsSection = _styledComponents2.default.ul(_templateObject14);

var WorksWithStripe = _styledComponents2.default.div(_templateObject15);

var ProductsDropdown = function ProductsDropdown() {
  return _react2.default.createElement(
    ProductsDropdownEl,
    null,
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
              Heading,
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
              Heading,
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
              Heading,
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
            Heading,
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
            Heading,
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
            Heading,
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
          Heading,
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

var NavbarItemTitle = _styledComponents2.default.button(_templateObject16);

var NavbarItemEl = _styledComponents2.default.li(_templateObject17);

var DropdownSlot = _styledComponents2.default.div(_templateObject18);

var NavbarItem = function (_Component2) {
  _inherits(NavbarItem, _Component2);

  function NavbarItem() {
    var _ref3;

    var _temp, _this2, _ret;

    _classCallCheck(this, NavbarItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref3 = NavbarItem.__proto__ || Object.getPrototypeOf(NavbarItem)).call.apply(_ref3, [this].concat(args))), _this2), _this2.onMouseEnter = function () {
      _this2.props.onMouseEnter(_this2.props.index);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(NavbarItem, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          title = _props2.title,
          children = _props2.children;

      return _react2.default.createElement(
        NavbarItemEl,
        null,
        _react2.default.createElement(
          NavbarItemTitle,
          {
            onMouseEnter: this.onMouseEnter,
            onFocus: this.onMouseEnter
          },
          title
        ),
        _react2.default.createElement(
          DropdownSlot,
          null,
          children
        )
      );
    }
  }]);

  return NavbarItem;
}(_react.Component);

var NavbarEl = _styledComponents2.default.nav(_templateObject19);

var NavbarList = _styledComponents2.default.ul(_templateObject20);

var Navbar = function (_Component3) {
  _inherits(Navbar, _Component3);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          onMouseLeave = _props3.onMouseLeave;

      return _react2.default.createElement(
        NavbarEl,
        { onMouseLeave: onMouseLeave },
        _react2.default.createElement(
          NavbarList,
          null,
          children
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

var navbarConfig = [{ title: "Products", dropdown: ProductsDropdown }, { title: "Developers", dropdown: DevelopersDropdown }, { title: "Company", dropdown: CompanyDropdown }];

var AnimatedNavbar = function (_Component4) {
  _inherits(AnimatedNavbar, _Component4);

  function AnimatedNavbar() {
    var _ref4;

    var _temp2, _this4, _ret2;

    _classCallCheck(this, AnimatedNavbar);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, (_ref4 = AnimatedNavbar.__proto__ || Object.getPrototypeOf(AnimatedNavbar)).call.apply(_ref4, [this].concat(args))), _this4), _this4.state = {
      activeIndices: []
    }, _this4.resetDropdownState = function () {
      _this4.setState({
        activeIndices: [],
        animatingOut: false
      });
      delete _this4.animatingOutTimeout;
    }, _this4.onMouseEnter = function (i) {
      if (_this4.state.activeIndices[_this4.state.activeIndices.length - 1] === i) return;
      if (_this4.animatingOutTimeout) {
        clearTimeout(_this4.animatingOutTimeout);
        _this4.resetDropdownState();
      }
      _this4.setState(function (prevState) {
        return {
          activeIndices: prevState.activeIndices.concat(i),
          animatingOut: false
        };
      });
    }, _this4.onMouseLeave = function (ev) {
      _this4.setState({
        animatingOut: true
      });
      _this4.animatingOutTimeout = setTimeout(_this4.resetDropdownState, _this4.props.tweenConfig.duration);
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  _createClass(AnimatedNavbar, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      var tweenConfig = this.props.tweenConfig;


      var CurrentDropdown = void 0;
      var PrevDropdown = void 0;
      var direction = void 0;

      var currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];
      var prevIndex = this.state.activeIndices.length > 1 && this.state.activeIndices[this.state.activeIndices.length - 2];

      if (typeof currentIndex === "number") CurrentDropdown = navbarConfig[currentIndex].dropdown;
      if (typeof prevIndex === "number") {
        direction = currentIndex > prevIndex ? "right" : "left";
      }

      return _react2.default.createElement(
        _reactFlipToolkit.Flipper,
        _extends({ flipKey: currentIndex }, tweenConfig),
        _react2.default.createElement(
          Navbar,
          { onMouseLeave: this.onMouseLeave },
          navbarConfig.map(function (n, index) {
            return _react2.default.createElement(
              NavbarItem,
              {
                title: n.title,
                index: index,
                onMouseEnter: _this5.onMouseEnter
              },
              currentIndex === index && _react2.default.createElement(
                DropdownContainer,
                {
                  direction: direction,
                  animatingOut: _this5.state.animatingOut,
                  tweenConfig: _this5.props.tweenConfig
                },
                "zx`zx"
              )
            );
          })
        )
      );
    }
  }]);

  return AnimatedNavbar;
}(_react.Component);

var Form = _styledComponents2.default.form(_templateObject21);

var DemoControls = function (_Component5) {
  _inherits(DemoControls, _Component5);

  function DemoControls() {
    _classCallCheck(this, DemoControls);

    return _possibleConstructorReturn(this, (DemoControls.__proto__ || Object.getPrototypeOf(DemoControls)).apply(this, arguments));
  }

  _createClass(DemoControls, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var _props4 = this.props,
          duration = _props4.duration,
          ease = _props4.ease;

      return _react2.default.createElement(
        Form,
        {
          innerRef: function innerRef(el) {
            return _this7.el = el;
          },
          onChange: function onChange() {
            _this7.props.onChange({
              duration: parseInt(_this7.el.querySelector('input[name="duration"]:checked').value, 10),
              ease: _this7.el.querySelector('input[name="ease"]:checked').value
            });
          }
        },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "fieldset",
            { key: "duration" },
            _react2.default.createElement(
              "legend",
              null,
              "Duration (ms):"
            ),
            [0, 300, 500, 1500].map(function (d) {
              return _react2.default.createElement(
                "label",
                { key: d },
                _react2.default.createElement("input", {
                  type: "radio",
                  name: "duration",
                  value: d,
                  checked: duration === d
                }),
                d
              );
            })
          ),
          _react2.default.createElement(
            "fieldset",
            { key: "easing" },
            _react2.default.createElement(
              "legend",
              null,
              "Easing:"
            ),
            ["linear", "easeOutExpo", "easeInOutCirc"].map(function (e) {
              return _react2.default.createElement(
                "label",
                { key: e },
                _react2.default.createElement("input", {
                  type: "radio",
                  name: "ease",
                  value: e,
                  checked: ease === e
                }),
                e
              );
            })
          )
        )
      );
    }
  }]);

  return DemoControls;
}(_react.Component);

var AppContainer = _styledComponents2.default.div(_templateObject22);

var Example = function (_Component6) {
  _inherits(Example, _Component6);

  function Example() {
    var _ref5;

    var _temp3, _this8, _ret3;

    _classCallCheck(this, Example);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this8 = _possibleConstructorReturn(this, (_ref5 = Example.__proto__ || Object.getPrototypeOf(Example)).call.apply(_ref5, [this].concat(args))), _this8), _this8.state = { duration: 1500, ease: "easeOutExpo" }, _this8.onChange = function (data) {
      _this8.setState(data);
    }, _temp3), _possibleConstructorReturn(_this8, _ret3);
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        AppContainer,
        null,
        _react2.default.createElement(AnimatedNavbar, {
          tweenConfig: {
            ease: this.state.ease,
            duration: this.state.duration
          }
        }),
        _react2.default.createElement(DemoControls, {
          duration: this.state.duration,
          onChange: this.onChange,
          ease: this.state.ease
        })
      );
    }
  }]);

  return Example;
}(_react.Component);

exports.default = Example;