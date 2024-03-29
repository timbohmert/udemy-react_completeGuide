//import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  //state is tied to the component that the custom hook is used in and every component has its own state with this custom hooks
  let counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
