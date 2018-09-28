"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ThemeContext = require("../../core/ThemeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderEl = _styledComponents2.default.div.withConfig({
  displayName: "Slider__SliderEl",
  componentId: "sc-1rsqk91-0"
})(["background:", ";position:relative;display:flex;align-items:center;width:100%;.prev,.next{margin:0 auto;cursor:pointer;transition:0.6s ease;padding:10px 0;height:100%;> div{align-items:center;line-height:1;}}.prev:hover,.next:hover{color:white;}"], function (props) {
  return props.background;
});

var NavbarListContainer = _styledComponents2.default.div.withConfig({
  displayName: "Slider__NavbarListContainer",
  componentId: "sc-1rsqk91-1"
})(["width:", "px;overflow-x:hidden;"], function (props) {
  return props.width;
});

var NavbarList = _styledComponents2.default.ul.withConfig({
  displayName: "Slider__NavbarList",
  componentId: "sc-1rsqk91-2"
})(["list-style:none;margin:0;padding:0;align-items:center;white-space:nowrap;display:inline-flex;li{display:inline-flex;}"]);

var BackArrow = _styledComponents2.default.div.withConfig({
  displayName: "Slider__BackArrow",
  componentId: "sc-1rsqk91-3"
})(["width:14px;height:14px;background:", ";z-index:9999;path{fill:", ";}"], function (props) {
  return props.background;
}, function (props) {
  return props.color;
});

var NextArrow = _styledComponents2.default.div.withConfig({
  displayName: "Slider__NextArrow",
  componentId: "sc-1rsqk91-4"
})(["width:14px;height:14px;background:", ";path{fill:", ";}"], function (props) {
  return props.background;
}, function (props) {
  return props.color;
});

var LeftArrow = function LeftArrow(_ref) {
  var goToPrevSlide = _ref.goToPrevSlide,
      background = _ref.background,
      color = _ref.color;

  return _react2.default.createElement(
    BackArrow,
    {
      className: "prev",
      onClick: goToPrevSlide,
      background: background,
      color: color
    },
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 129 129" },
        _react2.default.createElement("path", { d: "m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" })
      )
    )
  );
};

var RightArrow = function RightArrow(_ref2) {
  var goToNextSlide = _ref2.goToNextSlide,
      background = _ref2.background,
      color = _ref2.color;

  return _react2.default.createElement(
    NextArrow,
    {
      className: "next",
      onClick: goToNextSlide,
      background: background,
      color: color
    },
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 129 129" },
        _react2.default.createElement("path", { d: "m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" })
      )
    )
  );
};

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.getArrows = function () {
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
    };

    _this.getnavbarListContainerWidth = function () {
      var sliderRef = _this.sliderRef.current;
      var sliderArrowLeft = sliderRef.getElementsByClassName("prev")[0] || 0;
      var sliderArrowRight = sliderRef.getElementsByClassName("next")[0] || 0;

      /* 
      first I'm setting the navbarListContainerWidth to Zero because if I try to resize it gets the previous size. 
      So, if I try to resize the window to a smaller positon it always get the current size and never gets
      below that. 
      To solve it, I'm setting the width to zero so I can actualy get the real size of the container.
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
    };

    _this.goToPrevSlide = function () {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (_this.state.currentIndex === 0) {
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }

      // This will not run if we met the if condition above
      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + _this.slideWidth(prevState.currentIndex - 1)
        };
      });
    };

    _this.goToNextSlide = function () {
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
      }

      // This will not run if we met the if condition above
      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this.slideWidth(prevState.currentIndex)
        };
      });
    };

    _this.slideWidth = function (index) {
      // this method calculates the width of the current slide, and then returns it to us.
      return document.querySelector(".navelicious-slide" + index).clientWidth;
    };

    _this.sliderRef = _react2.default.createRef();
    _this.navbarListRef = _react2.default.createRef();

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
      var numberOfChildren = _react2.default.Children.count(this.props.children);

      this.setState({
        numberOfChildren: numberOfChildren
      });

      this.getArrows();
      this.getnavbarListContainerWidth();
      window.addEventListener("resize", this.getArrows);
      window.addEventListener("resize", this.getnavbarListContainerWidth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.getArrows);
      window.removeEventListener("resize", this.getnavbarListContainerWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var arrows = this.state.arrows;


      return _react2.default.createElement(
        _ThemeContext.ThemeConsumer,
        null,
        function (context) {
          return _react2.default.createElement(
            SliderEl,
            { innerRef: _this2.sliderRef, background: context.background },
            arrows && _react2.default.createElement(LeftArrow, {
              goToPrevSlide: _this2.goToPrevSlide,
              background: context.background,
              color: context.arrowsColor
            }),
            _react2.default.createElement(
              NavbarListContainer,
              { width: _this2.state.navbarListContainerWidth },
              _react2.default.createElement(
                NavbarList,
                {
                  className: "navelicious-navbar-list",
                  style: {
                    transform: "translateX(" + _this2.state.translateValue + "px)",
                    transition: "transform ease-out 0.45s"
                  }
                },
                children
              )
            ),
            arrows && _react2.default.createElement(RightArrow, {
              goToNextSlide: _this2.goToNextSlide,
              background: context.background,
              color: context.arrowsColor
            })
          );
        }
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;