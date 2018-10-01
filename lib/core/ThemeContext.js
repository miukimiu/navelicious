"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeConsumer = exports.ThemeProvider = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeContext = _react2.default.createContext({});

var ThemeProvider = exports.ThemeProvider = ThemeContext.Provider;
var ThemeConsumer = exports.ThemeConsumer = ThemeContext.Consumer;