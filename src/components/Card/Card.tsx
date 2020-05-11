import styled from 'styled-components';
import Box from '../Box';
import { variant, border, BorderProps } from 'styled-system';

interface CardProps {
  isPrimary?: boolean;
  type?: 'xl' | 'l' | 'm' | 's' | 'xs';
  children?: any;
}

type Props = CardProps & BorderProps;

const isPrimary = (props: Props) => `background-color: ${props.isPrimary ? 'red' : 'white'};`;

const Card = styled(Box)<Props>(
  {
    boxShadow: '5px 5px 20px 0 #EEEEEE, -5px -5px 20px 0 #FFFFFF',
  },
  isPrimary,
  border,
  variant({
    prop: 'type',
    variants: {
      xl: {
        minHeight: '400px',
        boxShadow: '40px 40px 80px 0 #EEEEEE, -40px -40px 80px 0 #FFFFFF',
      },
      l: {
        minHeight: '300px',
        boxShadow: '30px 30px 60px 0 #EEEEEE, -30px -30px 60px 0 #FFFFFF',
      },
      m: {
        minHeight: '200px',
        boxShadow: '20px 20px 40px 0 #EEEEEE, -20px -20px 40px 0 #FFFFFF',
      },
      s: {
        minHeight: '50px',
        boxShadow: '10px 10px 40px 0 #EEEEEE, -10px -10px 20px 0 #FFFFFF',
      },
      xs: {
        boxShadow: '5px 5px 40px 0 #EEEEEE, -5px -5px 20px 0 #FFFFFF',
      },
    },
  }),
);

Card.defaultProps = {
  px: '4',
  py: '3',
  borderRadius: '25px',
  type: 'xs',
};

export default Card;
