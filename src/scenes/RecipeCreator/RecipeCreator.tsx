import React from 'react';
import { Heading } from '../../components';
import Card from '../../components/Card';

interface RecipeCreatorProps {
  children?: any;
}

const RecipeCreator = (props: RecipeCreatorProps) => {
  return (
    <Card>
      <Heading variant="heading">
        Hello
      </Heading>
    </Card>
  );
};

export default RecipeCreator;