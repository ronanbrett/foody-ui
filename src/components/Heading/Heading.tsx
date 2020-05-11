import React from 'react';
import Box from '../Box';
import styled from 'styled-components';
import { variant } from 'styled-system';

interface HeadingProps {
  children?: any;
}

const Heading = styled(Box)(
  {},
  variant({
    scale: 'text',
  }),
);

// const Heading = (props: HeadingProps) => {
//   return (
//     <Box as="h2" {...props}></Box>
//   );
// };

export default (props: any) => <Heading as="h2" {...props} />;
