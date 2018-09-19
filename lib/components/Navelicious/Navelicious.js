"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  background: #53f;\n  display: flex;\n  flex-direction: column;\n  min-height: 200px;\n\n  > div:first-of-type {\n    flex: 1 0 200px;\n  }\n"], ["\n  background: #53f;\n  display: flex;\n  flex-direction: column;\n  min-height: 200px;\n\n  > div:first-of-type {\n    flex: 1 0 200px;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DevelopersDropdown = require("../ExampleContent/DevelopersDropdown");

var _DevelopersDropdown2 = _interopRequireDefault(_DevelopersDropdown);

var _ProductsDropdown = require("../ExampleContent/ProductsDropdown");

var _ProductsDropdown2 = _interopRequireDefault(_ProductsDropdown);

var _CompanyDropdown = require("../ExampleContent/CompanyDropdown");

var _CompanyDropdown2 = _interopRequireDefault(_CompanyDropdown);

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AppContainer = _styledComponents2.default.div(_templateObject);

var Navelicious = function (_Component) {
  _inherits(Navelicious, _Component);

  function Navelicious() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navelicious);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navelicious.__proto__ || Object.getPrototypeOf(Navelicious)).call.apply(_ref, [this].concat(args))), _this), _this.logHello = function () {
      console.log("hello!");
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navelicious, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        AppContainer,
        null,
        _react2.default.createElement(
          _index.Navbar,
          { justify: "space-between" },
          _react2.default.createElement(
            _index.NavbarCustomSection,
            null,
            "Logo"
          ),
          _react2.default.createElement(
            _index.NavbarSection,
            {
              ease: "easeOutExpo",
              duration: 500,
              dropdownBackground: "white"
            },
            _react2.default.createElement(
              _index.NavbarItem,
              { title: "Products" },
              _react2.default.createElement(_ProductsDropdown2.default, null)
            ),
            _react2.default.createElement(
              _index.NavbarItem,
              { title: "Developers" },
              _react2.default.createElement(_DevelopersDropdown2.default, null)
            ),
            _react2.default.createElement(
              _index.NavbarItem,
              { title: "Company" },
              _react2.default.createElement(_CompanyDropdown2.default, null)
            ),
            _react2.default.createElement(_index.NavbarItem, { title: "Click", onClick: this.logHello }),
            _react2.default.createElement(_index.NavbarItem, { title: "Link", linkTo: "/" })
          )
        )
      );
    }
  }]);

  return Navelicious;
}(_react.Component);

exports.default = Navelicious;