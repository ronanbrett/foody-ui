import React from 'react';
import { Heading } from '../../components';
import Card from '../../components/Card';
import { useObservable } from '../../hooks';
import { nameTest } from '../../services';

interface RecipeCreatorProps {
  children?: any;
}

const RecipeCreator = (props: RecipeCreatorProps) => {
  const names = useObservable(nameTest)
  return (
    <Card>
      <Heading variant="heading">
        Hello
      </Heading>
    </Card>
  );
};

export default RecipeCreator;