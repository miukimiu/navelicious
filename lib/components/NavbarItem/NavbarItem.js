"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFlipToolkit = require("react-flip-toolkit");

var _CreatePortal = _interopRequireDefault(require("../../core/CreatePortal"));

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

var NavbarItemEl = _styledComponents.default.li.withConfig({
  displayName: "NavbarItem__NavbarItemEl",
  componentId: "nlgbv9-0"
})(["position:relative;cursor:pointer;margin:0;padding:0;"]);

var NavbarItemTitle = _styledComponents.default.button.withConfig({
  displayName: "NavbarItem__NavbarItemTitle",
  componentId: "nlgbv9-1"
})(["background-color:transparent;font-family:inherit;font-weight:normal;border:none;font-size:16px;padding:10px 20px;color:", ";display:flex;justify-content:center;transition:opacity 250ms;cursor:pointer;position:relative;z-index:2;&:hover{opacity:0.7;outline:none;}&:focus{outline:none;}"], function (props) {
  return props.active ? props.activeColor : props.titleColor;
});

var NavbarItemLink = _styledComponents.default.a.withConfig({
  displayName: "NavbarItem__NavbarItemLink",
  componentId: "nlgbv9-2"
})(["font-family:inherit;font-weight:normal;font-size:16px;padding:10px 20px;color:", ";display:flex;justify-content:center;transition:opacity 250ms;cursor:pointer;position:relative;z-index:2;text-decoration:none;&:hover{opacity:0.7;}"], function (props) {
  return props.active ? props.activeColor : props.titleColor;
});

var DropdownSlot = _styledComponents.default.div.withConfig({
  displayName: "NavbarItem__DropdownSlot",
  componentId: "nlgbv9-3"
})(["position:absolute;left:50%;transform:translateX(-50%);perspective:1500px;z-index:9;"]);

var DropdownRoot = _styledComponents.default.div.withConfig({
  displayName: "NavbarItem__DropdownRoot",
  componentId: "nlgbv9-4"
})(["transform-origin:0 0;display:flex;flex-direction:column;align-items:center;position:absolute;top:", "px;left:", "px;width:300px;"], function (props) {
  return props.topPos;
}, function (props) {
  return props.leftPos;
});

var Caret = _styledComponents.default.div.withConfig({
  displayName: "NavbarItem__Caret",
  componentId: "nlgbv9-5"
})(["width:0;height:0;border-width:10px;border-style:solid;border-color:transparent transparent ", ";z-index:1;position:relative;top:1px;margin-top:-10px;"], function (props) {
  return props.dropdownBackground;
});

var DropdownBackground = _styledComponents.default.div.withConfig({
  displayName: "NavbarItem__DropdownBackground",
  componentId: "nlgbv9-6"
})(["transform-origin:0 0;background-color:", ";border-radius:4px;overflow:hidden;min-width:300px;min-height:200px;max-height:300px;overflow-y:auto;box-shadow:0 50px 100px rgba(50,50,93,0.1),0 15px 35px rgba(50,50,93,0.15),0 5px 15px rgba(0,0,0,0.1);"], function (props) {
  return props.dropdownBackground;
});

var NavbarItem =
/*#__PURE__*/
function (_Component) {
  _inherits(NavbarItem, _Component);

  function NavbarItem(props) {
    var _this;

    _classCallCheck(this, NavbarItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavbarItem).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnterDropdown", function () {
      _this.props.onMouseEnterDropdown(_this.props.index);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnter", function () {
      var _this$setState;

      _this.props.onMouseEnter(_this.props.index);

      var itemleftPos = _this.navbarItemRef.current.getBoundingClientRect().left;

      var itemCenterPos = _this.navbarItemRef.current.getBoundingClientRect().width / 2;

      var itemHeight = _this.navbarItemRef.current.getBoundingClientRect().height; // parentPos starts on arrow prev right pos


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

      _this.setState((_this$setState = {}, _defineProperty(_this$setState, "leftPos".concat(_this.props.index), childOffsetLeft), _defineProperty(_this$setState, "topPos".concat(_this.props.index), itemHeight), _this$setState));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseEnterLink", function () {
      _this.props.onMouseEnter(_this.props.index);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
      _this.props.onMouseLeave(_this.props.index);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeaveDropdown", function () {
      _this.props.onMouseLeaveDropdown(_this.props.index);
    });

    _this.state = {
      leftPos: 0,
      topPos: 0
    };
    _this.navbarItemRef = _react.default.createRef();
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

      var _this$props = this.props,
          currentIndex = _this$props.currentIndex,
          title = _this$props.title,
          children = _this$props.children,
          index = _this$props.index,
          onClick = _this$props.onClick,
          linkTo = _this$props.linkTo,
          className = _this$props.className,
          active = _this$props.active;
      return _react.default.createElement(_ThemeContext.ThemeConsumer, null, function (context) {
        return _react.default.createElement(NavbarItemEl, {
          className: className
        }, linkTo ? _react.default.createElement(NavbarItemLink, {
          href: linkTo,
          onMouseEnter: _this2.onMouseEnterLink,
          activeColor: context.activeColor,
          titleColor: context.titleColor,
          className: "navelicious-slide".concat(index),
          innerRef: _this2.navbarItemRef,
          active: active
        }, title) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(NavbarItemTitle, {
          onMouseEnter: _this2.onMouseEnter,
          onFocus: _this2.onMouseEnter,
          onClick: onClick,
          activeColor: context.activeColor,
          titleColor: context.titleColor,
          className: "navelicious-slide".concat(index),
          innerRef: _this2.navbarItemRef,
          active: active
        }, _react.default.createElement(_react.default.Fragment, null, onClick && title), _react.default.createElement(_react.default.Fragment, null, !onClick && title)), currentIndex === index && !onClick && _react.default.createElement(DropdownSlot, null, _react.default.createElement(_CreatePortal.default, null, _react.default.createElement(DropdownRoot, {
          leftPos: _this2.state["leftPos".concat(currentIndex)],
          topPos: _this2.state["topPos".concat(currentIndex)],
          onMouseEnter: _this2.onMouseEnterDropdown // onMouseLeave={this.onMouseLeaveDropdown}

        }, _react.default.createElement(_reactFlipToolkit.Flipped, {
          flipId: "dropdown-caret"
        }, _react.default.createElement(Caret, {
          dropdownBackground: context.dropdownBackground
        })), _react.default.createElement(_reactFlipToolkit.Flipped, {
          flipId: "dropdown"
        }, _react.default.createElement(DropdownBackground, {
          dropdownBackground: context.dropdownBackground
        }, _react.default.createElement(_reactFlipToolkit.Flipped, {
          inverseFlipId: "dropdown",
          scale: true
        }, children))))))));
      });
    }
  }]);

  return NavbarItem;
}(_react.Component);

NavbarItem.defaultProps = {
  active: false
};
NavbarItem.propTypes = {
  active: _propTypes.default.bool
};
var _default = NavbarItem;
exports.default = _default;