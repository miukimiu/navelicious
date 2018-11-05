"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeConsumer = exports.ThemeProvider = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeContext = _react.default.createContext({});

var ThemeProvider = ThemeContext.Provider;
exports.ThemeProvider = ThemeProvider;
var ThemeConsumer = ThemeContext.Consumer;
exports.ThemeConsumer = ThemeConsumer;