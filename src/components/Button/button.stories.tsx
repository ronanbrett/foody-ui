import React from 'react';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
  component: Button,
};

export const PrimaryText = ({ title }: { title: string }) => (
  <Button variant="primary" onClick={action('clicked')}>
    Hello Button
  </Button>
);

PrimaryText.story = {
  title: 'Hello',
};

export const PrimaryIcon = () => (
  <Button variant="primary" onClick={action('clicked')}>
    <FontAwesomeIcon icon={faPlus} />
    Hello Button
  </Button>
);

export const InvertedText = () => (
  <Button variant="inverted" onClick={action('clicked')}>
    Hello Button
  </Button>
);

export const InvertedIcon = () => (
  <Button variant="inverted" onClick={action('clicked')}>
    <FontAwesomeIcon icon={faPlus} />
    Hello Button
  </Button>
);
