import { EditForm, Text, Form, TodoList } from 'components';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const onAppLoad = () => {
    return JSON.parse(localStorage.getItem('todo-list')) ?? [];
  };

  const [todos, setTodos] = useState(onAppLoad);
  const [editValue, setEditValue] = useState('');

  const addTodos = (text) => {
    const todo = {
      id: nanoid(),
      text,
    };
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const editTarget = todos.find((todo) => todo.id === id);
    setEditValue(editTarget ?? '');
  };

  const saveEdit = (newTodo) => {
    setTodos((prevTodos) => {
      const targetIndex = prevTodos.findIndex((todo) => todo.id === newTodo.id);
      prevTodos[targetIndex].text = newTodo.text;
      const newTodos = [...prevTodos];
      return newTodos;
    });
    setEditValue('');
  };
  const cancelEdit = () => {
    setEditValue('');
  };

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Form onSubmit={addTodos} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      {editValue && (
        <EditForm
          defaultValue={editValue}
          onSave={saveEdit}
          onCancel={cancelEdit}
        />
      )}
    </>
  );
};
