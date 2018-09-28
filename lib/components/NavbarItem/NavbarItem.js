"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var NavbarItemEl = _styledComponents2.default.li.withConfig({
  displayName: "NavbarItem__NavbarItemEl",
  componentId: "k4bpy4-0"
})(["position:relative;cursor:pointer;"]);

var NavbarItemTitle = _styledComponents2.default.button.withConfig({
  displayName: "NavbarItem__NavbarItemTitle",
  componentId: "k4bpy4-1"
})(["background-color:transparent;font-family:inherit;font-weight:normal;border:none;font-size:16px;padding:10px 20px;color:", ";display:flex;justify-content:center;transition:opacity 250ms;cursor:pointer;position:relative;z-index:2;&:hover{opacity:0.7;outline:none;}&:focus{outline:none;}"], function (props) {
  return props.titleColor;
});

var NavbarItemLink = _styledComponents2.default.a.withConfig({
  displayName: "NavbarItem__NavbarItemLink",
  componentId: "k4bpy4-2"
})(["font-family:inherit;font-weight:normal;font-size:16px;padding:10px 20px;color:", ";display:flex;justify-content:center;transition:opacity 250ms;cursor:pointer;position:relative;z-index:2;text-decoration:none;&:hover{opacity:0.7;}"], function (props) {
  return props.titleColor;
});

var DropdownSlot = _styledComponents2.default.div.withConfig({
  displayName: "NavbarItem__DropdownSlot",
  componentId: "k4bpy4-3"
})(["position:absolute;left:50%;transform:translateX(-50%);perspective:1500px;z-index:9;"]);

var DropdownRoot = _styledComponents2.default.div.withConfig({
  displayName: "NavbarItem__DropdownRoot",
  componentId: "k4bpy4-4"
})(["transform-origin:0 0;display:flex;flex-direction:column;align-items:center;position:absolute;top:", "px;left:", "px;width:300px;"], function (props) {
  return props.topPos - 5;
}, function (props) {
  return props.leftPos;
});

var Caret = _styledComponents2.default.div.withConfig({
  displayName: "NavbarItem__Caret",
  componentId: "k4bpy4-5"
})(["width:0;height:0;border-width:10px;border-style:solid;border-color:transparent transparent ", ";z-index:1;position:relative;top:1px;margin-top:-10px;"], function (props) {
  return props.dropdownBackground;
});

var DropdownBackground = _styledComponents2.default.div.withConfig({
  displayName: "NavbarItem__DropdownBackground",
  componentId: "k4bpy4-6"
})(["transform-origin:0 0;background-color:", ";border-radius:4px;overflow:hidden;min-width:300px;min-height:200px;max-height:300px;overflow-y:auto;box-shadow:0 50px 100px rgba(50,50,93,0.1),0 15px 35px rgba(50,50,93,0.15),0 5px 15px rgba(0,0,0,0.1);"], function (props) {
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
      by adding half width of the item and half width of the DropdownRoot (20/2)
      */
      var childOffsetLeft = itemleftPos - parentPosLeft + itemCenterPos - 150;

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