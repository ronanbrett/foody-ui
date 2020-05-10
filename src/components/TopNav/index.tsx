import styled from '@emotion/styled';
import React from 'react';
import { color, space, layout } from 'styled-system';
import styles from './top-nav.module.css';

const HeaderContainer = styled.div<{ pl: number; color: string }>(color, space, layout);

function TopNav(props: any) {
  return (
    <header className={styles.nav}>
      <HeaderContainer pl={4} color="primary" {...props}></HeaderContainer>
    </header>
  );
}

export default TopNav;
