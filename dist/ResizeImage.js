(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.ResizeImage = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ResizeImage = function ResizeImage(props) {
    var src = props.src,
        options = props.options,
        style = props.style,
        alt = props.alt,
        resizeActive = props.resizeActive;


    return _react2.default.createElement('img', {
      src: resizeActive ? getRSZioUrl(src, options) : src,
      alt: alt,
      style: style
    });
  };

  ResizeImage.propTypes = {
    src: _propTypes2.default.string.isRequired,
    alt: _propTypes2.default.string,
    options: _propTypes2.default.object,
    style: _propTypes2.default.object,
    resizeActive: _propTypes2.default.bool
  };

  ResizeImage.defaultProps = {
    resizeActive: true
  };

  exports.default = ResizeImage;
});