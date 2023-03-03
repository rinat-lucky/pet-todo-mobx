import { observer } from "mobx-react";
import { Checkbox, ListItemButton, ListItemText } from '@mui/material';
import store from "../store/TodoStore";

const TodoItem = observer(({ todo }) => {
  const onToggleCompleted = () => {
    store.toggleCompleteTodo(todo.id);
  };

  const onRename = () => {
    const newText = prompt('Изменить задачу', todo.task) || todo.task;
    store.renameTodo(todo.id, newText);
  };

  return (
    <ListItemButton onDoubleClick={ onRename }>
      <Checkbox
        color='success' 
        checked={ todo.completed }
        onChange={ onToggleCompleted }
      />
      <ListItemText>{ todo.task }</ListItemText>
      {/* добавить две иконки - ред и удал */}
    </ListItemButton>
  );
});

export default TodoItem;
