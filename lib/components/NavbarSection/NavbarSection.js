"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFlipToolkit = require("react-flip-toolkit");

var _ThemeContext = require("../../core/ThemeContext");

var _NavbarItem = _interopRequireDefault(require("../NavbarItem/NavbarItem"));

var _Slider = _interopRequireDefault(require("../Slider/Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavbarSectionEl = _styledComponents.default.section.withConfig({
  displayName: "NavbarSection__NavbarSectionEl",
  componentId: "sc-1z04dqh-0"
})(["margin:auto;width:100%;position:relative;"]);

var NavbarList = _styledComponents.default.ul.withConfig({
  displayName: "NavbarSection__NavbarList",
  componentId: "sc-1z04dqh-1"
})(["display:flex;justify-content:center;list-style:none;margin:0;"]);

var FlipperEl = (0, _styledComponents.default)(_reactFlipToolkit.Flipper).withConfig({
  displayName: "NavbarSection__FlipperEl",
  componentId: "sc-1z04dqh-2"
})(["display:flex;flex:1;position:relative;"]);

var NavbarSection =
/*#__PURE__*/
function (_Component) {
  _inherits(NavbarSection, _Component);

  function NavbarSection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavbarSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavbarSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeIndices: [],
      animatingOut: false,
      inDropdown: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetDropdownState", function () {
      _this.setState({
        activeIndices: [],
        animatingOut: false,
        inDropdown: false
      });

      delete _this.animatingOutTimeout;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function (i) {
      if (_this.state.activeIndices[_this.state.activeIndices.length - 1] === i) return;

      if (_this.animatingOutTimeout) {
        clearTimeout(_this.animatingOutTimeout);

        _this.resetDropdownState();
      }

      _this.setState(function (prevState) {
        return {
          activeIndices: prevState.activeIndices.concat(i),
          animatingOut: false,
          inDropdown: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnterDropdown", function (i) {
      if (_this.state.activeIndices[_this.state.activeIndices.length - 1] === i) return;

      if (_this.animatingOutTimeout) {
        clearTimeout(_this.animatingOutTimeout);

        _this.resetDropdownState();
      }

      _this.setState(function (prevState) {
        return {
          activeIndices: prevState.activeIndices.concat(i),
          animatingOut: false,
          inDropdown: true
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
      _this.setState({
        animatingOut: true
      });

      _this.animatingOutTimeout = setTimeout(_this.resetDropdownState, _this.props.duration);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeaveDropdown", function () {
      _this.setState({
        animatingOut: true
      });

      if (_this.state.animatingOut) {
        _this.animatingOutTimeout = setTimeout(_this.resetDropdownState, _this.props.duration);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnterLink", function () {
      _this.setState({
        animatingOut: true
      });

      _this.animatingOutTimeout = setTimeout(_this.resetDropdownState, _this.props.duration);
    });

    return _this;
  }

  _createClass(NavbarSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          duration = _this$props.duration,
          ease = _this$props.ease,
          dropdownBackground = _this$props.dropdownBackground,
          titleColor = _this$props.titleColor,
          className = _this$props.className,
          arrowsColor = _this$props.arrowsColor;
      var navArrows = this.state.navArrows;
      var tweenConfig = {
        duration: duration,
        ease: ease
      };
      var CurrentDropdown;
      var PrevDropdown;
      var direction;
      var currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];
      var prevIndex = this.state.activeIndices.length > 1 && this.state.activeIndices[this.state.activeIndices.length - 2];

      if (typeof prevIndex === "number") {
        direction = currentIndex > prevIndex ? "right" : "left";
      } // copy props from parent to the children


      var children = _react.default.Children.map(this.props.children, function (child, index) {
        return _react.default.cloneElement(child, {
          index: index,
          currentIndex: currentIndex,
          link: child.props.link,
          dropdownBackground: dropdownBackground,
          titleColor: titleColor,
          onMouseEnter: _this2.onMouseEnter,
          onMouseEnterLink: _this2.onMouseEnterLink,
          onMouseEnterDropdown: _this2.onMouseEnterDropdown,
          onMouseLeave: _this2.onMouseLeave,
          onMouseLeaveDropdown: _this2.onMouseLeaveDropdown
        });
      });

      return _react.default.createElement(FlipperEl, _extends({
        flipKey: currentIndex
      }, tweenConfig, {
        className: className
      }), _react.default.createElement(_ThemeContext.ThemeProvider, {
        value: {
          arrowsColor: arrowsColor
        }
      }, _react.default.createElement(NavbarSectionEl, {
        id: "navelicious-section",
        onMouseLeave: this.onMouseLeave
      }, _react.default.createElement(_Slider.default, null, children))));
    }
  }]);

  return NavbarSection;
}(_react.Component);

NavbarSection.defaultProps = {
  duration: 500,
  ease: "easeOutExpo",
  titleColor: "black",
  dropdownBackground: "white",
  direction: "left",
  animatingOut: false
};
NavbarSection.propTypes = _defineProperty({
  /* Mouse leave duration in ms */
  duration: _propTypes.default.number,
  ease: _propTypes.default.string,
  dropdownBackground: _propTypes.default.string,
  titleColor: _propTypes.default.string,
  animatingOut: _propTypes.default.bool,
  direction: _propTypes.default.oneOf(["left", "right"])
}, "duration", _propTypes.default.number);
var _default = NavbarSection;
exports.default = _default;