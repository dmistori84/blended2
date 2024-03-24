import { GridItem } from '../GridItem/GridItem';
import style from './TodoListItem.module.css';
import { Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const TodoListItem = ({ todo, count, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    onEdit(todo.id);
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {count}
        </Text>
        <Text>{todo.text}</Text>
        <button
          onClick={handleDelete}
          className={style.deleteButton}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button onClick={handleEdit} className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
