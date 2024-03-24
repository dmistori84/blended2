import { GridItem } from '../GridItem/GridItem';
import style from './TodoListItem.module.css';
import { Text } from 'components';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ todo, count, onDelete }) => {
  const handleClick = () => {
    onDelete(todo.id);
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {count}
        </Text>
        <Text>{todo.text}</Text>
        <button
          onClick={handleClick}
          className={style.deleteButton}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </GridItem>
  );
};
