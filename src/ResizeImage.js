import React from 'react';
import PropTypes from 'prop-types';

import objectToParams from './objectToParams'


const getRSZioUrl = (src, options) => {
  let result = src
  // if is link
  if (/^https?:\/\//.test(src)) {
    result = result.replace(/^(https?:\/\/)/, '$1rsz.io/')
    if (options) {
      result += '?' + objectToParams(options)
    }
  }
  return result
}

const ResizeImage = (props) => {
  const { src, options, style, alt, resizeActive } = props

  return (
    <img
      src={resizeActive ? getRSZioUrl(src, options) : src}
      alt={alt}
      style={style}
    />
  )
}

ResizeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  options: PropTypes.object,
  style: PropTypes.object,
  resizeActive: PropTypes.bool,
}

ResizeImage.defaultProps = {
  resizeActive: true,
}

export default ResizeImage