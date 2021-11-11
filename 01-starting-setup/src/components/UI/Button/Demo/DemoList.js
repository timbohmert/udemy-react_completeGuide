import React, { useMemo } from 'react';

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log('ITEMS SORTED');

    return items.sort((a, b) => a - b);
  }, [items]);

  console.log('DemoList RUNNING');

  return (
    <div>
      <h2> {props.title} </h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
