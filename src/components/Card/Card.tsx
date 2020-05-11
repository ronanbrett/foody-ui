import styled from 'styled-components';
import Box from '../Box';

interface CardProps {
  isPrimary?: boolean;
  children?: any;
}

const isPrimary = (props: CardProps) => `background-color: ${props.isPrimary ? 'red' : 'white'};`;

const Card = styled(Box)<CardProps>(
  {
    boxShadow: '5px 5px 20px 0 #EEEEEE, -5px -5px 20px 0 #FFFFFF',
  },
  isPrimary,
);

export default Card;
