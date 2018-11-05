"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactFlipToolkit = require("react-flip-toolkit");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropdownRoot = _styledComponents.default.div.withConfig({
  displayName: "Example__DropdownRoot",
  componentId: "sc-1n10h4a-0"
})(["transform-origin:0 0;display:flex;flex-direction:column;align-items:center;position:relative;top:-20px;"]);

var Caret = _styledComponents.default.div.withConfig({
  displayName: "Example__Caret",
  componentId: "sc-1n10h4a-1"
})(["width:0;height:0;border-width:10px;border-style:solid;border-color:transparent transparent var(--white);z-index:1;position:relative;top:1px;"]);

var DropdownBackground = _styledComponents.default.div.withConfig({
  displayName: "Example__DropdownBackground",
  componentId: "sc-1n10h4a-2"
})(["transform-origin:0 0;background-color:var(--white);border-radius:4px;overflow:hidden;position:relative;box-shadow:0 50px 100px rgba(50,50,93,0.1),0 15px 35px rgba(50,50,93,0.15),0 5px 15px rgba(0,0,0,0.1);"]);

var DropdownContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownContainer, _Component);

  function DropdownContainer() {
    _classCallCheck(this, DropdownContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownContainer).apply(this, arguments));
  }

  _createClass(DropdownContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          direction = _this$props.direction,
          animatingOut = _this$props.animatingOut,
          tweenConfig = _this$props.tweenConfig;
      return _react.default.createElement(DropdownRoot, {
        direction: direction,
        animatingOut: animatingOut,
        duration: tweenConfig.duration
      }, _react.default.createElement(_reactFlipToolkit.Flipped, {
        flipId: "dropdown-caret"
      }, _react.default.createElement(Caret, null)), _react.default.createElement(_reactFlipToolkit.Flipped, {
        flipId: "dropdown"
      }, _react.default.createElement(DropdownBackground, null, _react.default.createElement(_reactFlipToolkit.Flipped, {
        inverseFlipId: "dropdown",
        scale: true
      }, _react.default.createElement("div", null, this.props.children)))));
    }
  }]);

  return DropdownContainer;
}(_react.Component);

_defineProperty(DropdownContainer, "propTypes", {
  children: _propTypes.default.node.isRequired,
  animatingOut: _propTypes.default.bool,
  direction: _propTypes.default.oneOf(["left", "right"]),
  tweenConfig: _propTypes.default.shape({
    duration: _propTypes.default.number,
    easing: _propTypes.default.string
  })
});

var Heading = _styledComponents.default.h3.withConfig({
  displayName: "Example__Heading",
  componentId: "sc-1n10h4a-3"
})(["text-transform:uppercase;font-weight:bold;font-size:1.1rem;margin-top:0;margin-bottom:", ";color:", ";"], function (props) {
  return props.noMarginBottom ? 0 : "1rem";
}, function (_ref) {
  var color = _ref.color;
  return color ? "var(--".concat(color, ")") : "var(--blue)";
});

var HeadingLink = Heading.withComponent("li");

var LinkList = _styledComponents.default.ul.withConfig({
  displayName: "Example__LinkList",
  componentId: "sc-1n10h4a-4"
})(["li{margin-bottom:1rem;}li:last-of-type{margin-bottom:0;}margin-left:", ";"], function (props) {
  return props.marginLeft ? props.marginLeft : 0;
});

var Icon = _styledComponents.default.div.withConfig({
  displayName: "Example__Icon",
  componentId: "sc-1n10h4a-5"
})(["width:13px;height:13px;margin-right:13px;background-color:var(--blue);opacity:0.8;display:inline-block;"]);

var DropdownSection = _styledComponents.default.div.withConfig({
  displayName: "Example__DropdownSection",
  componentId: "sc-1n10h4a-6"
})(["padding:var(--spacer);position:relative;z-index:1;"]);

var CompanyDropdownEl = _styledComponents.default.div.withConfig({
  displayName: "Example__CompanyDropdownEl",
  componentId: "sc-1n10h4a-7"
})(["width:18.5rem;"]);

var CompanyDropdown = function CompanyDropdown() {
  return _react.default.createElement(CompanyDropdownEl, null, _react.default.createElement(DropdownSection, {
    "data-first-dropdown-section": true
  }, _react.default.createElement("ul", null, _react.default.createElement(HeadingLink, null, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(Icon, null), " About Stripe")), _react.default.createElement(HeadingLink, null, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(Icon, null), "Customers")), _react.default.createElement(HeadingLink, null, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(Icon, null), "Jobs")), _react.default.createElement(HeadingLink, {
    noMarginBottom: true
  }, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(Icon, null), "Environment")))), _react.default.createElement(DropdownSection, null, _react.default.createElement("div", null, _react.default.createElement(Heading, null, _react.default.createElement(Icon, null), "From the Blog"), _react.default.createElement(LinkList, {
    marginLeft: "25px"
  }, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Stripe Atlas \u203A")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Stripe Home \u203A")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Improved Fraud Detection \u203A"))))));
};

var DevelopersDropdownEl = _styledComponents.default.div.withConfig({
  displayName: "Example__DevelopersDropdownEl",
  componentId: "sc-1n10h4a-8"
})(["width:25rem;"]);

var Flex = _styledComponents.default.div.withConfig({
  displayName: "Example__Flex",
  componentId: "sc-1n10h4a-9"
})(["display:flex;> div:first-of-type{margin-right:48px;}"]);

var DevelopersDropdown = function DevelopersDropdown() {
  return _react.default.createElement(DevelopersDropdownEl, null, _react.default.createElement(DropdownSection, {
    "data-first-dropdown-section": true
  }, _react.default.createElement("div", null, _react.default.createElement(Heading, null, "Documentation"), _react.default.createElement("p", null, "Start integrating Stripe\u2019s products and tools"), _react.default.createElement(Flex, null, _react.default.createElement("div", null, _react.default.createElement("h4", null, "Get Started"), _react.default.createElement(LinkList, null, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Elements")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Checkout")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Mobile apps")))), _react.default.createElement("div", null, _react.default.createElement("h4", null, "Popular Topics"), _react.default.createElement(LinkList, null, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Apple Pay")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Testing")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "/"
  }, "Launch Checklist"))))))), _react.default.createElement(DropdownSection, null, _react.default.createElement("ul", null, _react.default.createElement(HeadingLink, null, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(Icon, null), " Full API Reference")), _react.default.createElement(HeadingLink, null, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(Icon, null), " API Status")), _react.default.createElement(HeadingLink, {
    noMarginBottom: true
  }, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(Icon, null), " Open Source")))));
};

var ProductsDropdownEl = _styledComponents.default.div.withConfig({
  displayName: "Example__ProductsDropdownEl",
  componentId: "sc-1n10h4a-10"
})(["width:29rem;"]);

var Logo = _styledComponents.default.div.withConfig({
  displayName: "Example__Logo",
  componentId: "sc-1n10h4a-11"
})(["width:38px;height:38px;margin-right:16px;border-radius:100%;opacity:0.6;background-color:", ";"], function (_ref2) {
  var color = _ref2.color;
  return "var(--".concat(color, ")");
});

var SubProductsList = _styledComponents.default.ul.withConfig({
  displayName: "Example__SubProductsList",
  componentId: "sc-1n10h4a-12"
})(["li{display:flex;margin-bottom:1rem;}h3{margin-right:1rem;width:3.2rem;display:block;}a{color:var(--dark-grey);}"]);

var ProductsSection = _styledComponents.default.ul.withConfig({
  displayName: "Example__ProductsSection",
  componentId: "sc-1n10h4a-13"
})(["li{display:flex;}"]);

var WorksWithStripe = _styledComponents.default.div.withConfig({
  displayName: "Example__WorksWithStripe",
  componentId: "sc-1n10h4a-14"
})(["border-top:2px solid #fff;display:flex;justify-content:center;align-items:center;margin-top:var(--spacer);padding-top:var(--spacer);}h3{margin-bottom:0;}"]);

var ProductsDropdown = function ProductsDropdown() {
  return _react.default.createElement(ProductsDropdownEl, null, _react.default.createElement(DropdownSection, {
    "data-first-dropdown-section": true
  }, _react.default.createElement(ProductsSection, null, _react.default.createElement("li", null, _react.default.createElement("div", null, _react.default.createElement(Logo, {
    color: "blue"
  })), _react.default.createElement("div", null, _react.default.createElement(Heading, {
    color: "blue"
  }, "Payments"), _react.default.createElement("p", null, "A complete payments platform"))), _react.default.createElement("li", null, _react.default.createElement("div", null, _react.default.createElement(Logo, {
    color: "green"
  })), _react.default.createElement("div", null, _react.default.createElement(Heading, {
    color: "green"
  }, "Billing"), _react.default.createElement("p", null, "Build and scale your recurring business model"))), _react.default.createElement("li", null, _react.default.createElement("div", null, _react.default.createElement(Logo, {
    color: "teal"
  })), _react.default.createElement("div", null, _react.default.createElement(Heading, {
    color: "teal"
  }, "Connect"), _react.default.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "Everything platforms need to get sellers paid"))))), _react.default.createElement(DropdownSection, null, _react.default.createElement(SubProductsList, null, _react.default.createElement("li", null, _react.default.createElement(Heading, {
    noMarginBottom: true
  }, "Sigma"), _react.default.createElement("div", null, "Your business data at your fingertips.")), _react.default.createElement("li", null, _react.default.createElement(Heading, {
    noMarginBottom: true
  }, "Atlas"), _react.default.createElement("div", null, "The best way to start an internet business.")), _react.default.createElement("li", null, _react.default.createElement(Heading, {
    noMarginBottom: true
  }, "Radar"), _react.default.createElement("div", null, "Fight fraud with machine learning."))), _react.default.createElement(WorksWithStripe, null, _react.default.createElement(Heading, {
    noMarginBottom: true
  }, _react.default.createElement("a", {
    href: "/"
  }, _react.default.createElement(Icon, null), " Works with Stripe")))));
};

var NavbarItemTitle = _styledComponents.default.button.withConfig({
  displayName: "Example__NavbarItemTitle",
  componentId: "sc-1n10h4a-15"
})(["background-color:transparent;font-family:inherit;font-weight:bold;border:none;font-size:18px;padding:1.5rem;color:white;display:flex;justify-content:center;transition:opacity 250ms;cursor:pointer;position:relative;z-index:2;&:hover,&:focus{opacity:0.7;outline:none;}"]);

var NavbarItemEl = _styledComponents.default.li.withConfig({
  displayName: "Example__NavbarItemEl",
  componentId: "sc-1n10h4a-16"
})(["position:relative;cursor:pointer;"]);

var DropdownSlot = _styledComponents.default.div.withConfig({
  displayName: "Example__DropdownSlot",
  componentId: "sc-1n10h4a-17"
})(["position:absolute;left:50%;transform:translateX(-50%);perspective:1500px;"]);

var NavbarItem =
/*#__PURE__*/
function (_Component2) {
  _inherits(NavbarItem, _Component2);

  function NavbarItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavbarItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavbarItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function () {
      _this.props.onMouseEnter(_this.props.index);
    });

    return _this;
  }

  _createClass(NavbarItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          children = _this$props2.children;
      return _react.default.createElement(NavbarItemEl, null, _react.default.createElement(NavbarItemTitle, {
        onMouseEnter: this.onMouseEnter,
        onFocus: this.onMouseEnter
      }, title), _react.default.createElement(DropdownSlot, null, children));
    }
  }]);

  return NavbarItem;
}(_react.Component);

var NavbarEl = _styledComponents.default.nav.withConfig({
  displayName: "Example__NavbarEl",
  componentId: "sc-1n10h4a-18"
})(["margin:auto;"]);

var NavbarList = _styledComponents.default.ul.withConfig({
  displayName: "Example__NavbarList",
  componentId: "sc-1n10h4a-19"
})(["display:flex;justify-content:center;list-style:none;margin:0;"]);

var Navbar =
/*#__PURE__*/
function (_Component3) {
  _inherits(Navbar, _Component3);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          onMouseLeave = _this$props3.onMouseLeave;
      return _react.default.createElement(NavbarEl, {
        onMouseLeave: onMouseLeave
      }, _react.default.createElement(NavbarList, null, children));
    }
  }]);

  return Navbar;
}(_react.Component);

var navbarConfig = [{
  title: "Products",
  dropdown: ProductsDropdown
}, {
  title: "Developers",
  dropdown: DevelopersDropdown
}, {
  title: "Company",
  dropdown: CompanyDropdown
}];

var AnimatedNavbar =
/*#__PURE__*/
function (_Component4) {
  _inherits(AnimatedNavbar, _Component4);

  function AnimatedNavbar() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, AnimatedNavbar);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(AnimatedNavbar)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      activeIndices: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "resetDropdownState", function () {
      _this2.setState({
        activeIndices: [],
        animatingOut: false
      });

      delete _this2.animatingOutTimeout;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onMouseEnter", function (i) {
      if (_this2.state.activeIndices[_this2.state.activeIndices.length - 1] === i) return;

      if (_this2.animatingOutTimeout) {
        clearTimeout(_this2.animatingOutTimeout);

        _this2.resetDropdownState();
      }

      _this2.setState(function (prevState) {
        return {
          activeIndices: prevState.activeIndices.concat(i),
          animatingOut: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onMouseLeave", function () {
      _this2.setState({
        animatingOut: true
      });

      _this2.animatingOutTimeout = setTimeout(_this2.resetDropdownState, _this2.props.tweenConfig.duration);
    });

    return _this2;
  }

  _createClass(AnimatedNavbar, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var tweenConfig = this.props.tweenConfig;
      var CurrentDropdown;
      var PrevDropdown;
      var direction;
      var currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];
      var prevIndex = this.state.activeIndices.length > 1 && this.state.activeIndices[this.state.activeIndices.length - 2];
      if (typeof currentIndex === "number") CurrentDropdown = navbarConfig[currentIndex].dropdown;

      if (typeof prevIndex === "number") {
        direction = currentIndex > prevIndex ? "right" : "left";
      }

      return _react.default.createElement(_reactFlipToolkit.Flipper, _extends({
        flipKey: currentIndex
      }, tweenConfig), _react.default.createElement(Navbar, {
        onMouseLeave: this.onMouseLeave
      }, navbarConfig.map(function (n, index) {
        return _react.default.createElement(NavbarItem, {
          title: n.title,
          index: index,
          onMouseEnter: _this3.onMouseEnter
        }, currentIndex === index && _react.default.createElement(DropdownContainer, {
          direction: direction,
          animatingOut: _this3.state.animatingOut,
          tweenConfig: _this3.props.tweenConfig
        }));
      })));
    }
  }]);

  return AnimatedNavbar;
}(_react.Component);

var Form = _styledComponents.default.form.withConfig({
  displayName: "Example__Form",
  componentId: "sc-1n10h4a-20"
})(["padding:1.5rem 0 0.5rem 0;background-color:#fff;display:flex;justify-content:center;> div{display:flex;}fieldset{border:0;padding:1rem 0 1rem 0;margin-right:3rem;}legend{font-weight:bold;display:block;}input{margin-right:0.5rem;}label + label input{margin-left:1.5rem;}"]);

var DemoControls =
/*#__PURE__*/
function (_Component5) {
  _inherits(DemoControls, _Component5);

  function DemoControls() {
    _classCallCheck(this, DemoControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(DemoControls).apply(this, arguments));
  }

  _createClass(DemoControls, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props4 = this.props,
          duration = _this$props4.duration,
          ease = _this$props4.ease;
      return _react.default.createElement(Form, {
        innerRef: function innerRef(el) {
          return _this4.el = el;
        },
        onChange: function onChange() {
          _this4.props.onChange({
            duration: parseInt(_this4.el.querySelector('input[name="duration"]:checked').value, 10),
            ease: _this4.el.querySelector('input[name="ease"]:checked').value
          });
        }
      }, _react.default.createElement("div", null, _react.default.createElement("fieldset", {
        key: "duration"
      }, _react.default.createElement("legend", null, "Duration (ms):"), [0, 300, 500, 1500].map(function (d) {
        return _react.default.createElement("label", {
          key: d
        }, _react.default.createElement("input", {
          type: "radio",
          name: "duration",
          value: d,
          checked: duration === d
        }), d);
      })), _react.default.createElement("fieldset", {
        key: "easing"
      }, _react.default.createElement("legend", null, "Easing:"), ["linear", "easeOutExpo", "easeInOutCirc"].map(function (e) {
        return _react.default.createElement("label", {
          key: e
        }, _react.default.createElement("input", {
          type: "radio",
          name: "ease",
          value: e,
          checked: ease === e
        }), e);
      }))));
    }
  }]);

  return DemoControls;
}(_react.Component);

var AppContainer = _styledComponents.default.div.withConfig({
  displayName: "Example__AppContainer",
  componentId: "sc-1n10h4a-21"
})(["background:#53f;display:flex;flex-direction:column;min-height:100vh;> div:first-of-type{flex:1 0 70vh;}"]);

var Example =
/*#__PURE__*/
function (_Component6) {
  _inherits(Example, _Component6);

  function Example() {
    var _getPrototypeOf4;

    var _this5;

    _classCallCheck(this, Example);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(Example)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "state", {
      duration: 1500,
      ease: "easeOutExpo"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "onChange", function (data) {
      _this5.setState(data);
    });

    return _this5;
  }

  _createClass(Example, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(AppContainer, null, _react.default.createElement(AnimatedNavbar, {
        tweenConfig: {
          ease: this.state.ease,
          duration: this.state.duration
        }
      }), _react.default.createElement(DemoControls, {
        duration: this.state.duration,
        onChange: this.onChange,
        ease: this.state.ease
      }));
    }
  }]);

  return Example;
}(_react.Component);

var _default = Example;
exports.default = _default;