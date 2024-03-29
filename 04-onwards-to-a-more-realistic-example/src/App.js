import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHTTP from './hooks/use-http';

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks
  } = useHTTP();

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        loadedTasks.push({
          id: taskKey,
          text: taskObj[taskKey].text
        });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: 'https://custom-hooks-76ab1-default-rtdb.firebaseio.com/tasks.json'
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
