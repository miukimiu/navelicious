"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 100%;\n  position: relative;\n"], ["\n  margin: auto;\n  width: 100%;\n  position: relative;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n"], ["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  position: relative;\n"], ["\n  display: flex;\n  flex: 1;\n  position: relative;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFlipToolkit = require("react-flip-toolkit");

var _ThemeContext = require("../../core/ThemeContext");

var _NavbarItem = require("../NavbarItem/NavbarItem");

var _NavbarItem2 = _interopRequireDefault(_NavbarItem);

var _Slider = require("../Slider/Slider");

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarSectionEl = _styledComponents2.default.section(_templateObject);

var NavbarList = _styledComponents2.default.ul(_templateObject2);

var FlipperEl = (0, _styledComponents2.default)(_reactFlipToolkit.Flipper)(_templateObject3);

var NavbarSection = function (_Component) {
  _inherits(NavbarSection, _Component);

  function NavbarSection() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavbarSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavbarSection.__proto__ || Object.getPrototypeOf(NavbarSection)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeIndices: [],
      animatingOut: false,
      inDropdown: false
    }, _this.resetDropdownState = function () {
      console.log("resetDropdownState");
      _this.setState({
        activeIndices: [],
        animatingOut: false,
        inDropdown: false
      });
      delete _this.animatingOutTimeout;
    }, _this.onMouseEnter = function (i) {
      console.log("onMouseEnter");
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
    }, _this.onMouseEnterDropdown = function (i) {
      console.log("onMouseEnterDropdown");
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
    }, _this.onMouseLeave = function () {
      console.log("onMouseLeave");

      _this.setState({
        animatingOut: true
      });

      _this.animatingOutTimeout = setTimeout(_this.resetDropdownState, _this.props.duration);
    }, _this.onMouseLeaveDropdown = function () {
      console.log("onMouseLeaveDropdown");
      _this.setState({
        animatingOut: true
      });

      if (_this.state.animatingOut) {
        console.log("it's animating out drop");
        _this.animatingOutTimeout = setTimeout(_this.resetDropdownState, _this.props.duration);
      }
    }, _this.onMouseEnterLink = function () {
      _this.setState({
        animatingOut: true
      });
      _this.animatingOutTimeout = setTimeout(_this.resetDropdownState, _this.props.duration);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavbarSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          duration = _props.duration,
          ease = _props.ease,
          dropdownBackground = _props.dropdownBackground,
          titleColor = _props.titleColor,
          className = _props.className,
          arrowsColor = _props.arrowsColor;
      var navArrows = this.state.navArrows;


      console.log(this.state.animatingOut, this.state.activeIndices);

      var tweenConfig = {
        duration: duration,
        ease: ease
      };

      var CurrentDropdown = void 0;
      var PrevDropdown = void 0;
      var direction = void 0;

      var currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];

      var prevIndex = this.state.activeIndices.length > 1 && this.state.activeIndices[this.state.activeIndices.length - 2];

      if (typeof prevIndex === "number") {
        direction = currentIndex > prevIndex ? "right" : "left";
      }

      // copy props from parent to the children
      var children = _react2.default.Children.map(this.props.children, function (child, index) {
        return _react2.default.cloneElement(child, {
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

      return _react2.default.createElement(
        FlipperEl,
        _extends({ flipKey: currentIndex }, tweenConfig, { className: className }),
        _react2.default.createElement(
          _ThemeContext.ThemeProvider,
          { value: { arrowsColor: arrowsColor } },
          _react2.default.createElement(
            NavbarSectionEl,
            {
              id: "navelicious-section",
              onMouseLeave: this.onMouseLeave
            },
            _react2.default.createElement(
              _Slider2.default,
              null,
              children
            )
          )
        )
      );
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
  duration: _propTypes2.default.number,
  ease: _propTypes2.default.string,
  dropdownBackground: _propTypes2.default.string,
  titleColor: _propTypes2.default.string,
  animatingOut: _propTypes2.default.bool,
  direction: _propTypes2.default.oneOf(["left", "right"])
}, "duration", _propTypes2.default.number);

exports.default = NavbarSection;