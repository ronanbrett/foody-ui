import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#111017',
    white: '#FFFFFF',
    gray: '#F4F4F4',
  },
};

const Theme = (props: any) => <ThemeProvider {...props} theme={theme} />;
export default Theme;
