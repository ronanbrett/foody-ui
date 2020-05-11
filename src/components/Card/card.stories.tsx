import React from 'react';
import Card from './Card';
export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = () => (
  <Card size="m">
    <h1>Hello</h1>
    <p>What Not</p>
  </Card>
);

export const XSmall = () => (
  <Card size="xs">
    <h1>Hello</h1>
  </Card>
);

export const Small = () => (
  <Card size="s">
    <h1>Hello</h1>
  </Card>
);

export const Large = () => (
  <Card size="l">
    <h1>Hello</h1>
  </Card>
);
export const XLarge = () => (
  <Card size="xl">
    <h1>Hello</h1>
  </Card>
);
