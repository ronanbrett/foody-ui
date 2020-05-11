import React from 'react';
import styled from 'styled-components';
import { variant, VariantArgs } from 'styled-system';
// import css from '@styled-system/css';

const Button = styled.button<{ variant: string }>(
  {
    appearance: 'none',
    fontFamily: 'inherit',
    padding: '10px 24px',
    minHeight: '40px',
    borderRadius: '15px',
    '& > svg': {
      marginRight: '12px',
    },
  },
  variant({
    scale: 'buttons',
  }),
);

export default Button;
