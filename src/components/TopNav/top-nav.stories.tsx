import React from 'react';
import { action } from '@storybook/addon-actions';

import TopNav from './index';

export default {
  component: TopNav,
  title: 'Components/Nav/Top',
  // Our exports that end in "Data" are not stories.
};

export const Default = () => <TopNav></TopNav>;
