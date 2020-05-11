import React from 'react';

import RecipeCreator from './RecipeCreator';

import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Pages/RecipeCreator',
  decorators: [withKnobs],
  component: RecipeCreator,
};


export const Default = () => (
  <RecipeCreator></RecipeCreator>
);
