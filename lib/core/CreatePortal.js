"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreatePortal = function (_React$Component) {
  _inherits(CreatePortal, _React$Component);

  function CreatePortal(props) {
    _classCallCheck(this, CreatePortal);

    // Create container DOM element and append to DOM.
    var _this = _possibleConstructorReturn(this, (CreatePortal.__proto__ || Object.getPrototypeOf(CreatePortal)).call(this, props));

    _this.overlayContainer = document.createElement("div");
    document.getElementById("navelicious-section").appendChild(_this.overlayContainer);
    return _this;
  }

  _createClass(CreatePortal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.getElementById("navelicious-section").removeChild(this.overlayContainer);
    }
  }, {
    key: "render",
    value: function render() {
      return _reactDom2.default.createPortal(_react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          null,
          this.props.children
        )
      ), this.overlayContainer);
    }
  }]);

  return CreatePortal;
}(_react2.default.Component);

exports.default = CreatePortal;