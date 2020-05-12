import React from 'react';
import Card from '../../components/Card';
import { useObservable } from '../../hooks';
import { nameTest } from '../../services';

const Home = (props: any) => {
  const names = useObservable(nameTest)

  return <div>
    <Card pl={4} pr={4} py={3}>
      <h2>Home</h2>
    </Card>
  </div>
}

export default Home;
