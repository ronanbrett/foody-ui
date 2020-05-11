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
  typography,
  TypographyProps,
  compose,
} from 'styled-system';

export type BoxProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps & TypographyProps;

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'content-box',
  },
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
  ),
);

export default Box;
