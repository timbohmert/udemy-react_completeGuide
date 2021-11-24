//import { useState, useEffect } from 'react';

import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  //state is tied to the component that the custom hook is used in and every component has its own state with this custom hooks
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
