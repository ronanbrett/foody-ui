/** @jsx jsx */

import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  border,
  BorderProps,
} from 'styled-system';

export type BoxProps = SpaceProps | LayoutProps | ColorProps | FlexboxProps;

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'content-box',
  },
  space,
  color,
  layout,
  flexbox,
  border,
);

export default Box;
