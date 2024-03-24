import { Grid } from '../Grid/Grid';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          count={i + 1}
          onDelete={onDelete}
        />
      ))}
    </Grid>
  );
};
