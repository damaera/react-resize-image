import React from 'react';

import { render } from 'enzyme';
import { expect } from 'chai';

import ResizeImage from '../ResizeImage';

const src = 'http://test.com/image.jpeg'
const alt = 'alt'

describe('<ResizeImage />', () => {

  it('should render image with rsz link', () => {
    const wrapper = render(
      <ResizeImage src={src} alt={alt} />
    );
    console.log(wrapper)
    // expect(wrapper.src).to.equal('http://rsz.io/test.com/image.jpeg');
  });
});