"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: bold;\n  border: none;\n  font-size: 18px;\n  padding: 1.5rem;\n  color: white;\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  &:hover {\n    opacity: 0.7;\n    outline: none;\n  }\n  &:focus {\n    outline: none;\n  }\n"], ["\n  background-color: transparent;\n  font-family: inherit;\n  font-weight: bold;\n  border: none;\n  font-size: 18px;\n  padding: 1.5rem;\n  color: white;\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  &:hover {\n    opacity: 0.7;\n    outline: none;\n  }\n  &:focus {\n    outline: none;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  font-family: inherit;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 1.5rem;\n  color: white;\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n  &:hover {\n    opacity: 0.7;\n  }\n"], ["\n  font-family: inherit;\n  font-weight: bold;\n  font-size: 18px;\n  padding: 1.5rem;\n  color: white;\n  display: flex;\n  justify-content: center;\n  transition: opacity 250ms;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n  &:hover {\n    opacity: 0.7;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"], ["\n  position: relative;\n  cursor: pointer;\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  perspective: 1500px;\n"], ["\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  perspective: 1500px;\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  transform-origin: 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  top: -20px;\n"], ["\n  transform-origin: 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  top: -20px;\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent ", ";\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n"], ["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent ", ";\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  transform-origin: 0 0;\n  background-color: ", ";\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n"], ["\n  transform-origin: 0 0;\n  background-color: ", ";\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFlipToolkit = require("react-flip-toolkit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavbarItemTitle = _styledComponents2.default.button(_templateObject);

var NavbarItemLink = _styledComponents2.default.a(_templateObject2);

var NavbarItemEl = _styledComponents2.default.li(_templateObject3);

var DropdownSlot = _styledComponents2.default.div(_templateObject4);

var DropdownRoot = _styledComponents2.default.div(_templateObject5);

var Caret = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.dropdownBackground;
});

var DropdownBackground = _styledComponents2.default.div(_templateObject7, function (props) {
  return props.dropdownBackground;
});

var NavbarItem = function (_Component) {
  _inherits(NavbarItem, _Component);

  function NavbarItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NavbarItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavbarItem.__proto__ || Object.getPrototypeOf(NavbarItem)).call.apply(_ref, [this].concat(args))), _this), _this.onMouseEnter = function () {
      _this.props.onMouseEnter(_this.props.index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NavbarItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.currentIndex !== nextProps.currentIndex;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          currentIndex = _props.currentIndex,
          title = _props.title,
          dropdownBackground = _props.dropdownBackground,
          children = _props.children,
          index = _props.index,
          link = _props.link,
          onClick = _props.onClick,
          linkTo = _props.linkTo,
          onMouseEnterLink = _props.onMouseEnterLink;


      return _react2.default.createElement(
        NavbarItemEl,
        null,
        linkTo ? _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            NavbarItemLink,
            { href: linkTo, onMouseEnter: onMouseEnterLink },
            title
          )
        ) : _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            NavbarItemTitle,
            {
              onMouseEnter: this.onMouseEnter,
              onFocus: this.onMouseEnter,
              onClick: onClick
            },
            _react2.default.createElement(
              _react2.default.Fragment,
              null,
              link && _react2.default.createElement(
                "a",
                null,
                "sadsd"
              )
            ),
            _react2.default.createElement(
              _react2.default.Fragment,
              null,
              onClick && title
            ),
            _react2.default.createElement(
              _react2.default.Fragment,
              null,
              !link && !onClick && title
            )
          ),
          _react2.default.createElement(
            DropdownSlot,
            null,
            currentIndex === index && !link && !onClick && _react2.default.createElement(
              DropdownRoot,
              null,
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
      );
    }
  }]);

  return NavbarItem;
}(_react.Component);

exports.default = NavbarItem;