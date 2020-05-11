import React from 'react';
import Box from '../Box';
import styled from 'styled-components';
import { variant } from 'styled-system';

interface HeadingProps {
  variant: 'heading' | 'display' | 'caption';
  children?: any;
}

const Heading = styled(Box)<HeadingProps>(
  {},
  variant({
    scale: 'text',
  }),
);
export default (props: HeadingProps) => <Heading as="h2" {...props} />;
