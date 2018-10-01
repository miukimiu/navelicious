"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ThemeContext = require("../../core/ThemeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SliderEl = _styledComponents.default.div.withConfig({
  displayName: "Slider__SliderEl",
  componentId: "sc-1rsqk91-0"
})(["background:", ";position:relative;display:flex;align-items:center;width:100%;.prev,.next{margin:0 auto;cursor:pointer;transition:0.6s ease;width:20px;height:20px;position:relative;z-index:1;> div{align-items:center;line-height:1;width:14px;height:14px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}}.prev:hover,.next:hover{color:white;}"], function (props) {
  return props.background;
});

var NavbarListContainer = _styledComponents.default.div.withConfig({
  displayName: "Slider__NavbarListContainer",
  componentId: "sc-1rsqk91-1"
})(["width:", "px;overflow-x:hidden;"], function (props) {
  return props.width;
});

var NavbarList = _styledComponents.default.ul.withConfig({
  displayName: "Slider__NavbarList",
  componentId: "sc-1rsqk91-2"
})(["list-style:none;margin:0;padding:0;align-items:center;white-space:nowrap;display:inline-block;li{display:inline-flex;}"]);

var BackArrow = _styledComponents.default.div.withConfig({
  displayName: "Slider__BackArrow",
  componentId: "sc-1rsqk91-3"
})(["background:", ";z-index:9999;path{fill:", ";}"], function (props) {
  return props.background;
}, function (props) {
  return props.color;
});

var NextArrow = _styledComponents.default.div.withConfig({
  displayName: "Slider__NextArrow",
  componentId: "sc-1rsqk91-4"
})(["background:", ";path{fill:", ";}"], function (props) {
  return props.background;
}, function (props) {
  return props.color;
});

var LeftArrow = function LeftArrow(_ref) {
  var goToPrevSlide = _ref.goToPrevSlide,
      background = _ref.background,
      color = _ref.color;
  return _react.default.createElement(BackArrow, {
    className: "prev",
    onClick: goToPrevSlide,
    background: background,
    color: color
  }, _react.default.createElement("div", null, _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 129 129"
  }, _react.default.createElement("path", {
    d: "m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"
  }))));
};

var RightArrow = function RightArrow(_ref2) {
  var goToNextSlide = _ref2.goToNextSlide,
      background = _ref2.background,
      color = _ref2.color;
  return _react.default.createElement(NextArrow, {
    className: "next",
    onClick: goToNextSlide,
    background: background,
    color: color
  }, _react.default.createElement("div", null, _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 129 129"
  }, _react.default.createElement("path", {
    d: "m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"
  }))));
};

var Slider =
/*#__PURE__*/
function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getArrows", function () {
      var sliderWidth = _this.sliderRef.current.getBoundingClientRect().width || 0;
      var navbarListWidth = document.getElementsByClassName("navelicious-navbar-list")[0].getBoundingClientRect().width;

      if (navbarListWidth <= sliderWidth) {
        _this.setState({
          arrows: false
        });
      } else {
        _this.setState({
          arrows: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getNavbarListContainerWidth", function () {
      var sliderRef = _this.sliderRef.current;
      var sliderArrowLeft = sliderRef.getElementsByClassName("prev")[0] || 0;
      var sliderArrowRight = sliderRef.getElementsByClassName("next")[0] || 0;
      /* 
      first I'm setting the navbarListContainerWidth to Zero because if I try to resize it gets the previous size. 
      So, if I try to resize the window to a smaller positon it always get the current size and never gets
      below that. 
      To solve this, I'm setting the width to zero so I can actualy get the real size of the container.
      */

      _this.setState({
        navbarListContainerWidth: 0
      });

      var navbarListContainerWidth = sliderRef.offsetWidth - (sliderArrowLeft.offsetWidth + sliderArrowRight.offsetWidth);
      /* 
      As you might have noticed the state was first set to zero. 
      After that I could get the real size of the navbarlistWith and
      now I can apply it. It need a setTimeout do first get the zero
      */

      setTimeout(function () {
        _this.setState({
          navbarListContainerWidth: navbarListContainerWidth
        });
      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "goToPrevSlide", function () {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (_this.state.currentIndex === 0) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      } // This will not run if we met the if condition above


      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + _this.slideWidth(prevState.currentIndex - 1)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "goToNextSlide", function () {
      /* 
      if last item rigt position is less than right side of container I'm in the end of the slider
      After that when I click the arrow I want to go back to position 0. So I want to set the 
      state translateValue to 0 
      */
      var sliderArrowRight = _this.sliderRef.current.getBoundingClientRect().right || 0;
      var navList = document.getElementsByClassName("navelicious-navbar-list")[0].getBoundingClientRect().right;

      if (navList <= sliderArrowRight) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      } // This will not run if we met the if condition above


      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this.slideWidth(prevState.currentIndex)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slideWidth", function (index) {
      // this method calculates the width of the current slide, and then returns it to us.
      return document.querySelector(".navelicious-slide".concat(index)).clientWidth;
    });

    _this.sliderRef = _react.default.createRef();
    _this.navbarListRef = _react.default.createRef();
    _this.state = {
      arrows: true,
      currentIndex: 0,
      translateValue: 0,
      numberOfChildren: 0,
      sliderWidth: 0,
      navbarListContainerWidth: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.children !== this.props.children) {
        this.getArrows();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // count number of children
      var numberOfChildren = _react.default.Children.count(this.props.children);

      this.setState({
        numberOfChildren: numberOfChildren
      });
      this.getArrows();
      this.getNavbarListContainerWidth();
      window.addEventListener("resize", this.getArrows);
      window.addEventListener("resize", this.getNavbarListContainerWidth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.getArrows);
      window.removeEventListener("resize", this.getNavbarListContainerWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var arrows = this.state.arrows;
      return _react.default.createElement(_ThemeContext.ThemeConsumer, null, function (context) {
        return _react.default.createElement(SliderEl, {
          innerRef: _this2.sliderRef,
          background: context.background
        }, arrows && _react.default.createElement(LeftArrow, {
          goToPrevSlide: _this2.goToPrevSlide,
          background: context.background,
          color: context.arrowsColor
        }), _react.default.createElement(NavbarListContainer, {
          width: _this2.state.navbarListContainerWidth
        }, _react.default.createElement(NavbarList, {
          className: "navelicious-navbar-list",
          style: {
            transform: "translateX(".concat(_this2.state.translateValue, "px)"),
            transition: "transform ease-out 0.45s"
          }
        }, children)), arrows && _react.default.createElement(RightArrow, {
          goToNextSlide: _this2.goToNextSlide,
          background: context.background,
          color: context.arrowsColor
        }));
      });
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;