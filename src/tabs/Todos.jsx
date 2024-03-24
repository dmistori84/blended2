import { Text } from 'components';
import { Form, TodoList } from 'components';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const onAppLoad = () => {
    return JSON.parse(localStorage.getItem('todo-list')) ?? [];
  };

  const [todos, setTodos] = useState(onAppLoad);

  const addTodos = text => {
    const todo = {
      id: nanoid(),
      text,
    };
    setTodos(prev => [...prev, todo]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
  });

  return (
    <>
      <Form addTodos={addTodos} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <TodoList todos={todos} onDelete={deleteTodo} />
    </>
  );
};
