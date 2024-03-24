import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import style from './EditForm.module.css';
import { useState } from 'react';

export const EditForm = ({ defaultValue, onSave, onCancel }) => {
  const [newValue, setNewValue] = useState(defaultValue.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: defaultValue.id, text: newValue });
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleCancel = () => {
    onCancel();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        onChange={handleChange}
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        value={newValue}
        autoFocus
      />
    </form>
  );
};
