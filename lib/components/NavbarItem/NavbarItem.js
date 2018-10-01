"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n"], ["\n  position: relative;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: normal;\n  border: none;\n  font-size: 16px;\n  padding: 10px 20px;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  &:hover {\n    opacity: 0.7;\n    outline: none;\n  }\n  &:focus {\n    outline: none;\n  }\n"], ["\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: normal;\n  border: none;\n  font-size: 16px;\n  padding: 10px 20px;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  &:hover {\n    opacity: 0.7;\n    outline: none;\n  }\n  &:focus {\n    outline: none;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  font-family: inherit;\n  font-weight: normal;\n  font-size: 16px;\n  padding: 10px 20px;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n  &:hover {\n    opacity: 0.7;\n  }\n"], ["\n  font-family: inherit;\n  font-weight: normal;\n  font-size: 16px;\n  padding: 10px 20px;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n  &:hover {\n    opacity: 0.7;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  perspective: 1500px;\n  z-index: 9;\n"], ["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  perspective: 1500px;\n  z-index: 9;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  transform-origin: 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n  width: 300px;\n  /* background: red; */\n"], ["\n  transform-origin: 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n  width: 300px;\n  /* background: red; */\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent ", ";\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n  margin-top: -10px;\n"], ["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent ", ";\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n  margin-top: -10px;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  transform-origin: 0 0;\n  background-color: ", ";\n  border-radius: 4px;\n  overflow: hidden;\n  min-width: 300px;\n  min-height: 200px;\n  max-height: 300px;\n  overflow-y: auto;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n"], ["\n  transform-origin: 0 0;\n  background-color: ", ";\n  border-radius: 4px;\n  overflow: hidden;\n  min-width: 300px;\n  min-height: 200px;\n  max-height: 300px;\n  overflow-y: auto;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFlipToolkit = require("react-flip-toolkit");

var _CreatePortal = require("../../core/CreatePortal");

var _CreatePortal2 = _interopRequireDefault(_CreatePortal);

var _ThemeContext = require("../../core/ThemeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarItemEl = _styledComponents2.default.li(_templateObject);

var NavbarItemTitle = _styledComponents2.default.button(_templateObject2, function (props) {
  return props.titleColor;
});

var NavbarItemLink = _styledComponents2.default.a(_templateObject3, function (props) {
  return props.titleColor;
});

var DropdownSlot = _styledComponents2.default.div(_templateObject4);

var DropdownRoot = _styledComponents2.default.div(_templateObject5, function (props) {
  return props.topPos;
}, function (props) {
  return props.leftPos;
});

var Caret = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.dropdownBackground;
});

var DropdownBackground = _styledComponents2.default.div(_templateObject7, function (props) {
  return props.dropdownBackground;
});

var NavbarItem = function (_Component) {
  _inherits(NavbarItem, _Component);

  function NavbarItem(props) {
    _classCallCheck(this, NavbarItem);

    var _this = _possibleConstructorReturn(this, (NavbarItem.__proto__ || Object.getPrototypeOf(NavbarItem)).call(this, props));

    _this.onMouseEnterDropdown = function () {
      var _this$props = _this.props,
          index = _this$props.index,
          onMouseEnter = _this$props.onMouseEnter;

      _this.props.onMouseEnterDropdown(_this.props.index);
    };

    _this.onMouseEnter = function () {
      var _this$setState;

      var _this$props2 = _this.props,
          index = _this$props2.index,
          onMouseEnter = _this$props2.onMouseEnter;

      _this.props.onMouseEnter(_this.props.index);

      var itemleftPos = _this.navbarItemRef.current.getBoundingClientRect().left;
      var itemCenterPos = _this.navbarItemRef.current.getBoundingClientRect().width / 2;
      var itemHeight = _this.navbarItemRef.current.getBoundingClientRect().height;

      // parentPos starts on arrow prev right pos
      var parentPosLeft = document.getElementById("navelicious-section").getBoundingClientRect().left || 0;

      /* 
      Because absolute position is relative to the parent I get
      the left position by subtracting the position left of the item
      less the parent left position.
      The element gets to the left of the item so I need to center it,
      by adding half width of the item and half width of the DropdownRoot (300/2)
      */
      var childOffsetLeft = itemleftPos - parentPosLeft + itemCenterPos - 150;

      /*
      The top positon of the dropwond is the height of the hovered item 
      */

      console.log("itemHeight", itemHeight);
      _this.setState((_this$setState = {}, _defineProperty(_this$setState, "leftPos" + _this.props.index, childOffsetLeft), _defineProperty(_this$setState, "topPos" + _this.props.index, itemHeight), _this$setState));
    };

    _this.onMouseEnterLink = function () {
      _this.props.onMouseEnter(_this.props.index);
    };

    _this.onMouseLeave = function () {
      _this.props.onMouseLeave(_this.props.index);
    };

    _this.onMouseLeaveDropdown = function () {
      _this.props.onMouseLeaveDropdown(_this.props.index);
    };

    _this.state = {
      leftPos: 0,
      topPos: 0
    };

    _this.navbarItemRef = _react2.default.createRef();
    return _this;
  }

  _createClass(NavbarItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.currentIndex !== nextProps.currentIndex;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentIndex = _props.currentIndex,
          title = _props.title,
          dropdownBackground = _props.dropdownBackground,
          children = _props.children,
          index = _props.index,
          onClick = _props.onClick,
          linkTo = _props.linkTo,
          onMouseEnterLink = _props.onMouseEnterLink,
          titleColor = _props.titleColor,
          className = _props.className;


      return _react2.default.createElement(
        _ThemeContext.ThemeConsumer,
        null,
        function (context) {
          return _react2.default.createElement(
            NavbarItemEl,
            { className: className },
            linkTo ? _react2.default.createElement(
              NavbarItemLink,
              {
                href: linkTo,
                onMouseEnter: _this2.onMouseEnterLink,
                titleColor: titleColor,
                className: "navelicious-slide" + index,
                innerRef: _this2.navbarItemRef
              },
              title
            ) : _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _react2.default.createElement(
                NavbarItemTitle,
                {
                  onMouseEnter: _this2.onMouseEnter,
                  onFocus: _this2.onMouseEnter
                  // onMouseLeave={this.onMouseLeave}
                  , onClick: onClick,
                  titleColor: titleColor,
                  className: "navelicious-slide" + index,
                  innerRef: _this2.navbarItemRef
                },
                _react2.default.createElement(
                  _react2.default.Fragment,
                  null,
                  onClick && title
                ),
                _react2.default.createElement(
                  _react2.default.Fragment,
                  null,
                  !onClick && title
                )
              ),
              currentIndex === index && !onClick && _react2.default.createElement(
                DropdownSlot,
                null,
                _react2.default.createElement(
                  _CreatePortal2.default,
                  null,
                  _react2.default.createElement(
                    DropdownRoot,
                    {
                      leftPos: _this2.state["leftPos" + currentIndex],
                      topPos: _this2.state["topPos" + currentIndex],
                      onMouseEnter: _this2.onMouseEnterDropdown
                      // onMouseLeave={this.onMouseLeaveDropdown}
                    },
                    _react2.default.createElement(
                      _reactFlipToolkit.Flipped,
                      { flipId: "dropdown-caret" },
                      _react2.default.createElement(Caret, { dropdownBackground: dropdownBackground })
                    ),
                    _react2.default.createElement(
                      _reactFlipToolkit.Flipped,
                      { flipId: "dropdown" },
                      _react2.default.createElement(
                        DropdownBackground,
                        {
                          dropdownBackground: dropdownBackground
                        },
                        _react2.default.createElement(
                          _reactFlipToolkit.Flipped,
                          { inverseFlipId: "dropdown", scale: true },
                          children
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }
      );
    }
  }]);

  return NavbarItem;
}(_react.Component);

exports.default = NavbarItem;