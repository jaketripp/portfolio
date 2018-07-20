'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaMedium = function FaMedium(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'M5.586 11.117c.047-.461-.133-.922-.477-1.234L1.586 5.633V5h10.953l8.469 18.57L28.453 5h10.445v.633l-3.016 2.891c-.258.195-.391.523-.336.844v21.25c-.055.32 .078.648 .336.844l2.945 2.891v.633H24.008v-.633l3.055-2.961c.297-.297.297-.391.297-.844V13.375L18.867 34.93h-1.148L7.844 13.375v14.445c-.086.609 .117 1.219.547 1.656l3.969 4.813v.633h-11.25v-.625L5.078 29.477c.422-.437.617-1.055.508-1.656V11.117z' })
        )
    );
};

exports.default = FaMedium;
module.exports = exports['default'];