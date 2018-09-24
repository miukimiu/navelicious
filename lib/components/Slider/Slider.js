"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  background: pink;\n  /* width: 400px; */\n  overflow-x: hidden;\n"], ["\n  background: pink;\n  /* width: 400px; */\n  overflow-x: hidden;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n"], ["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SliderEl = _styledComponents2.default.div(_templateObject);

var NavbarList = _styledComponents2.default.ul(_templateObject2);

var RightArrow = function RightArrow(props) {
  return _react2.default.createElement(
    "div",
    { className: "nextArrow", onClick: props.goToNextSlide },
    _react2.default.createElement(
      "p",
      null,
      "Next"
    )
  );
};

var LeftArrow = function LeftArrow(props) {
  return _react2.default.createElement(
    "div",
    { className: "backArrow", onClick: props.goToPrevSlide },
    _react2.default.createElement(
      "p",
      null,
      "Back"
    )
  );
};

var Slide = function Slide(_ref) {
  var button = _ref.button;

  //   const styles = {
  //     backgroundImage: `url(https://placekitten.com/${image})`,
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "50% 60%"
  //   };
  return _react2.default.createElement(
    "div",
    { className: "slide" },
    button
  );
};

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.goToPrevSlide = function () {};

    _this.goToNextSlide = function () {
      console.log("goToNextSlide");
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (_this.state.currentIndex === _this.state.numberOfChildren) {
        console.log("currentIndex is equal to numberOfChildren");
        return _this.setState({
          currentIndex: 0,
          translateValue: 0
        });
      }

      // This will not run if we met the if condition above
      _this.setState(function (prevState) {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -_this.slideWidth()
        };
      });
    };

    _this.slideWidth = function () {
      // this method calculates the width of the current slide, and then returns it to us.
      console.log(document.querySelector(".slide").clientWidth);
      return document.querySelector(".slide").clientWidth;
    };

    _this.state = {
      currentIndex: 0,
      translateValue: 0,
      numberOfChildren: 0
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // copy props from parent to the children
      var numberOfChildren = _react2.default.Children.count(this.props.children);

      console.log("numberOfChildren", numberOfChildren);

      this.setState({ numberOfChildren: numberOfChildren });
    }
  }, {
    key: "render",
    value: function render() {
      console.log({
        cuurentIndex: this.state.currentIndex,
        translateValue: this.state.translateValue
      });
      var children = this.props.children;

      return _react2.default.createElement(
        SliderEl,
        null,
        _react2.default.createElement(
          "div",
          {
            className: "slider-wrapper",
            style: {
              transform: "translateX(" + this.state.translateValue + "px)",
              transition: "transform ease-out 0.45s"
            }
          },
          _react2.default.createElement(
            NavbarList,
            null,
            children
          )
        ),
        _react2.default.createElement(LeftArrow, { goToPrevSlide: this.goToPrevSlide }),
        _react2.default.createElement(RightArrow, { goToNextSlide: this.goToNextSlide })
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;