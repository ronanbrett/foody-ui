import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ColorProps, margin, SpaceProps } from 'styled-system';
import { AppRoutes } from '../../app-routes';
import Box from '../Box';
import Card from '../Card';

const Side = styled(Box)<ColorProps>({
  display: 'flex',
  width: '120px',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const Menu = styled(Card)<SpaceProps>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

type SideNavProps = {
  routes: AppRoutes[];
  children?: any;
};

const Link = styled(NavLink)<SpaceProps>(
  {
    width: '80%',
    marginBottom: '12px',
  },
  margin,
);

function SideNav({ routes }: SideNavProps) {
  return (
    <Side backgroundColor="gray">
      <Menu p={3} borderRadius={24}>
        {routes
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((route, index) => (
            <Link mb={index === routes.length - 1 ? 0 : 4} exact to={route.path}>
              <img alt={route.label} src={route.img} />
            </Link>
          ))}
      </Menu>
    </Side>
  );
}

export default SideNav;
