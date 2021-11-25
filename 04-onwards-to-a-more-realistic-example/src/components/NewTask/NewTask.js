import { useState } from 'react';
import useHTTP from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {
    isLoading,
    error,
    sendRequest: sendTaskRequest
  } = useHTTP();

  const newTaskData = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = {
      id: generatedId,
      text: taskText
    };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = (taskText) => {
    sendTaskRequest(
      {
        url: 'https://custom-hooks-76ab1-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: taskText,
        headers: { 'Content-Type': 'application/json' }
      },
      newTaskData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={enterTaskHandler}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
