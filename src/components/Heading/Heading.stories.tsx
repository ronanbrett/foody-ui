import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  decorators: [withKnobs],
  component: Heading,
};


export const Default = () => (
  <Heading variant="heading">
    Recipe Markets
  </Heading>
);

export const Display = () => (
  <Heading variant="display">
    Hello
  </Heading>
);

export const Caption = () => (
  <Heading variant="caption">
    Hello
  </Heading>
);