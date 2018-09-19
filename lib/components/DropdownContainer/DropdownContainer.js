"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  transform-origin: 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  top: -20px;\n"], ["\n  transform-origin: 0 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  top: -20px;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent ", ";\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n"], ["\n  width: 0;\n  height: 0;\n  border-width: 10px;\n  border-style: solid;\n  border-color: transparent transparent ", ";\n  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */\n  z-index: 1;\n  position: relative;\n  /* prevent any gap in between caret and main dropdown */\n  top: 1px;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  transform-origin: 0 0;\n  background-color: ", ";\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n"], ["\n  transform-origin: 0 0;\n  background-color: ", ";\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),\n    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);\n"]);

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

var DropdownRoot = _styledComponents2.default.div(_templateObject);
var Caret = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.dropdownBackground;
});

var DropdownBackground = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.dropdownBackground;
});

var DropdownContainer = function (_Component) {
  _inherits(DropdownContainer, _Component);

  function DropdownContainer() {
    _classCallCheck(this, DropdownContainer);

    return _possibleConstructorReturn(this, (DropdownContainer.__proto__ || Object.getPrototypeOf(DropdownContainer)).apply(this, arguments));
  }

  _createClass(DropdownContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          direction = _props.direction,
          animatingOut = _props.animatingOut,
          duration = _props.duration,
          dropdownBackground = _props.dropdownBackground;

      return _react2.default.createElement(
        DropdownRoot,
        {
          direction: direction,
          animatingOut: animatingOut,
          duration: duration
        },
        _react2.default.createElement(
          _reactFlipToolkit.Flipped,
          { flipId: "dropdown-caret" },
          _react2.default.createElement(Caret, null)
        ),
        _react2.default.createElement(
          _reactFlipToolkit.Flipped,
          { flipId: "dropdown" },
          _react2.default.createElement(
            DropdownBackground,
            { dropdownBackground: dropdownBackground },
            _react2.default.createElement(
              _reactFlipToolkit.Flipped,
              { inverseFlipId: "dropdown", scale: true },
              _react2.default.createElement(
                "div",
                null,
                this.props.children
              )
            )
          )
        )
      );
    }
  }]);

  return DropdownContainer;
}(_react.Component);

DropdownContainer.propTypes = {
  children: _propTypes2.default.node.isRequired,
  animatingOut: _propTypes2.default.bool,
  direction: _propTypes2.default.oneOf(["left", "right"]),
  duration: _propTypes2.default.number
};
exports.default = DropdownContainer;