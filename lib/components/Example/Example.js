"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // const { Component, Children, cloneElement } = window.React;
// const { keyframes, default: styled } = window.styled;

var DropdownRoot = _styledComponents2.default.div.withConfig({
  displayName: "Example__DropdownRoot",
  componentId: "ahu5di-0"
})(["transform-origin:0 0;display:flex;flex-direction:column;align-items:center;position:relative;top:-20px;"]);
var Caret = _styledComponents2.default.div.withConfig({
  displayName: "Example__Caret",
  componentId: "ahu5di-1"
})(["width:0;height:0;border-width:10px;border-style:solid;border-color:transparent transparent var(--white);z-index:1;position:relative;top:1px;"]);

var DropdownBackground = _styledComponents2.default.div.withConfig({
  displayName: "Example__DropdownBackground",
  componentId: "ahu5di-2"
})(["transform-origin:0 0;background-color:var(--white);border-radius:4px;overflow:hidden;position:relative;box-shadow:0 50px 100px rgba(50,50,93,0.1),0 15px 35px rgba(50,50,93,0.15),0 5px 15px rgba(0,0,0,0.1);"]);

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


var Heading = _styledComponents2.default.h3.withConfig({
  displayName: "Example__Heading",
  componentId: "ahu5di-3"
})(["text-transform:uppercase;font-weight:bold;font-size:1.1rem;margin-top:0;margin-bottom:", ";color:", ";"], function (props) {
  return props.noMarginBottom ? 0 : "1rem";
}, function (_ref) {
  var color = _ref.color;
  return color ? "var(--" + color + ")" : "var(--blue)";
});

var HeadingLink = Heading.withComponent("li");

var LinkList = _styledComponents2.default.ul.withConfig({
  displayName: "Example__LinkList",
  componentId: "ahu5di-4"
})(["li{margin-bottom:1rem;}li:last-of-type{margin-bottom:0;}margin-left:", ";"], function (props) {
  return props.marginLeft ? props.marginLeft : 0;
});

var Icon = _styledComponents2.default.div.withConfig({
  displayName: "Example__Icon",
  componentId: "ahu5di-5"
})(["width:13px;height:13px;margin-right:13px;background-color:var(--blue);opacity:0.8;display:inline-block;"]);

var DropdownSection = _styledComponents2.default.div.withConfig({
  displayName: "Example__DropdownSection",
  componentId: "ahu5di-6"
})(["padding:var(--spacer);position:relative;z-index:1;"]);

var CompanyDropdownEl = _styledComponents2.default.div.withConfig({
  displayName: "Example__CompanyDropdownEl",
  componentId: "ahu5di-7"
})(["width:18.5rem;"]);

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

var DevelopersDropdownEl = _styledComponents2.default.div.withConfig({
  displayName: "Example__DevelopersDropdownEl",
  componentId: "ahu5di-8"
})(["width:25rem;"]);

var Flex = _styledComponents2.default.div.withConfig({
  displayName: "Example__Flex",
  componentId: "ahu5di-9"
})(["display:flex;> div:first-of-type{margin-right:48px;}"]);

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

var ProductsDropdownEl = _styledComponents2.default.div.withConfig({
  displayName: "Example__ProductsDropdownEl",
  componentId: "ahu5di-10"
})(["width:29rem;"]);

var Logo = _styledComponents2.default.div.withConfig({
  displayName: "Example__Logo",
  componentId: "ahu5di-11"
})(["width:38px;height:38px;margin-right:16px;border-radius:100%;opacity:0.6;background-color:", ";"], function (_ref2) {
  var color = _ref2.color;
  return "var(--" + color + ")";
});

var SubProductsList = _styledComponents2.default.ul.withConfig({
  displayName: "Example__SubProductsList",
  componentId: "ahu5di-12"
})(["li{display:flex;margin-bottom:1rem;}h3{margin-right:1rem;width:3.2rem;display:block;}a{color:var(--dark-grey);}"]);

var ProductsSection = _styledComponents2.default.ul.withConfig({
  displayName: "Example__ProductsSection",
  componentId: "ahu5di-13"
})(["li{display:flex;}"]);

var WorksWithStripe = _styledComponents2.default.div.withConfig({
  displayName: "Example__WorksWithStripe",
  componentId: "ahu5di-14"
})(["border-top:2px solid #fff;display:flex;justify-content:center;align-items:center;margin-top:var(--spacer);padding-top:var(--spacer);}h3{margin-bottom:0;}"]);

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

var NavbarItemTitle = _styledComponents2.default.button.withConfig({
  displayName: "Example__NavbarItemTitle",
  componentId: "ahu5di-15"
})(["background-color:transparent;font-family:inherit;font-weight:bold;border:none;font-size:18px;padding:1.5rem;color:white;display:flex;justify-content:center;transition:opacity 250ms;cursor:pointer;position:relative;z-index:2;&:hover,&:focus{opacity:0.7;outline:none;}"]);

var NavbarItemEl = _styledComponents2.default.li.withConfig({
  displayName: "Example__NavbarItemEl",
  componentId: "ahu5di-16"
})(["position:relative;cursor:pointer;"]);

var DropdownSlot = _styledComponents2.default.div.withConfig({
  displayName: "Example__DropdownSlot",
  componentId: "ahu5di-17"
})(["position:absolute;left:50%;transform:translateX(-50%);perspective:1500px;"]);

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

var NavbarEl = _styledComponents2.default.nav.withConfig({
  displayName: "Example__NavbarEl",
  componentId: "ahu5di-18"
})(["margin:auto;"]);

var NavbarList = _styledComponents2.default.ul.withConfig({
  displayName: "Example__NavbarList",
  componentId: "ahu5di-19"
})(["display:flex;justify-content:center;list-style:none;margin:0;"]);

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
    }, _this4.onMouseLeave = function () {
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
              currentIndex === index && _react2.default.createElement(DropdownContainer, {
                direction: direction,
                animatingOut: _this5.state.animatingOut,
                tweenConfig: _this5.props.tweenConfig
              })
            );
          })
        )
      );
    }
  }]);

  return AnimatedNavbar;
}(_react.Component);

var Form = _styledComponents2.default.form.withConfig({
  displayName: "Example__Form",
  componentId: "ahu5di-20"
})(["padding:1.5rem 0 0.5rem 0;background-color:#fff;display:flex;justify-content:center;> div{display:flex;}fieldset{border:0;padding:1rem 0 1rem 0;margin-right:3rem;}legend{font-weight:bold;display:block;}input{margin-right:0.5rem;}label + label input{margin-left:1.5rem;}"]);

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

var AppContainer = _styledComponents2.default.div.withConfig({
  displayName: "Example__AppContainer",
  componentId: "ahu5di-21"
})(["background:#53f;display:flex;flex-direction:column;min-height:100vh;> div:first-of-type{flex:1 0 70vh;}"]);

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