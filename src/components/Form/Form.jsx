import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ addTodos }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addTodos(value);
    setValue('');
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        onChange={handleChange}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        value={value}
        autoFocus
      />
    </form>
  );
};
