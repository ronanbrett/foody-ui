import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import Theme from '../src/components/Theme';

import '../src/assets/normalize.css';
import '../src/assets/main.css';

const GlobalWrapper = storyFn => (
  <div>
    <Theme>{storyFn()}</Theme>
  </div>
);

addDecorator(GlobalWrapper);
