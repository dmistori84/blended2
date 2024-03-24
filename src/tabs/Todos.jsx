import { Text } from 'components';
import { Form } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    setTodos(prev => [...prev, todo]);
  };
  console.log(todos);
  return (
    <>
      <Form addTodos={addTodos} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
