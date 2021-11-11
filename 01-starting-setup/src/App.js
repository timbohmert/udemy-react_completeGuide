import React, {
  useState,
  useCallback,
  useMemo
} from 'react';
import Button from './components/UI/Button/Button';
import DemoList from './components/UI/Button/Demo/DemoList';

import './App.css';

function App() {
  const [paragraph, setParagraph] = useState(
    'Hello from the otherside'
  );

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    setParagraph('Why hello there!');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={paragraph} items={listItems} />
      <Button onClick={toggleParagraphHandler}>
        Change Paragraph
      </Button>
    </div>
  );
}

export default App;
