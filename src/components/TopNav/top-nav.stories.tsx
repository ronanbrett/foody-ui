import React from 'react';
import { action } from '@storybook/addon-actions';

import TopNav from './index';

export default {
  component: TopNav,
  title: 'Nav',
  // Our exports that end in "Data" are not stories.
};

export const Default = () => <TopNav></TopNav>;
