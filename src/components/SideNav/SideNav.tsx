import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { margin, SpaceProps } from 'styled-system';
import { AppRoutes } from '../../app-routes';
import Box from '../Box';
import Card from '../Card';

const coolBoxKeyframes = keyframes`
  0% {
    height: 0px;
    background: green;
  }
  100% {
    height: 200px;
    background: blue;
  }`;

const Side = styled(Box)<{ backgroundColor: string }>({
  display: 'flex',
  width: '120px',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const Menu = styled(Card)<{ px: number; py: number; borderRadius: number }>({
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
      <Menu px={3} py={4} borderRadius={24}>
        {routes
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((route, index) => (
            <Link key={route.path} mb={index === routes.length - 1 ? 0 : 4} exact to={route.path}>
              <img alt={route.label} src={route.img} />
            </Link>
          ))}
      </Menu>
    </Side>
  );
}

export default SideNav;
