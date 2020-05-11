import React from 'react';

import styled from 'styled-components';
import { space, SpaceProps, typography, TypographyProps, color, ColorProps } from 'styled-system';

const Nav = styled('nav')<SpaceProps | TypographyProps | ColorProps>(
  {
    flex: '0 0 80px',
    height: '80px',
    backgroundColor: '#F4F4F4',
    display: 'flex',
    alignItems: 'center',
  },
  space,
  color,
  typography,
);

type TopNavProps = {
  children?: any;
};

const TopNav = (props: TopNavProps) => {
  return (
    <Nav px={4} fontSize={3}>
      {document.title}
    </Nav>
  );
};

export default TopNav;
