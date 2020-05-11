import React from 'react';
import { ThemeProvider } from 'styled-components';
import { color } from 'styled-system';

const colors = {
  text: '#111017',
  background: '#F4F4F4',
  highlight: 'hsla(205, 100%, 40%, 0.125)',

  black: '#111017',
  white: '#FFFFFF',
  gray: '#F4F4F4',
};

const theme = {
  colors,
  fonts: {
    body: 'Lato, system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  buttons: {
    primary: {
      color: colors.white,
      background: colors.black,
    },
    inverted: {
      color: colors.black,
      background: colors.white,
      border: `1px solid ${colors.black}`,
    },
  },
  text: {
    heading: {
      fontFamily: 'Lato',
      lineHeight: '1.25',
      fontWeight: '700',
      fontSize: '48px',
    },
    display: {
      fontFamily: 'Lato',
      fontWeight: '400',
      lineHeight: '1.5',
      fontSize: '16px',
    },
    caption: {
      fontFamily: 'Lato',
      fontWeight: '400',
      lineHeight: '1',
      fontSize: '14px',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
};

const Theme = (props: any) => <ThemeProvider theme={theme} {...props} />;
export default Theme;
