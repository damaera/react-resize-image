import React from 'react';
import { storiesOf } from '@storybook/react';
import ResizeImage from '../src/ResizeImage';

const src = 'http://i.ytimg.com/vi/NMfgvXZdTrA/maxresdefault.jpg'
const options = {
  width: 200
}
storiesOf('ResizeImage', module)
  .add('resize', () => <ResizeImage src={src} options={options} />)