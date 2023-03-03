import { observer } from "mobx-react";
import { Container, Button, List, Typography, Input } from '@mui/material';
import store from "../store/TodoStore";
import Header from "./Header";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = observer(() => {
  const [currentTodo, setCurrentTodo] = useState('');
  
  const onNewTodo = () => {
    store.addTodo(currentTodo);
    setCurrentTodo('');
  };

  return (
    <Container maxWidth='sm'>
      <Header />
      <Input
        id="new-todo-text"
        placeholder="Новая задача"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <Button onClick={ onNewTodo } variant='contained'>Добавить</Button>
      <List>
        { store.todos.map(
          (todo) => <TodoItem todo={ todo } key={ todo.id } />
        ) }
      </List>
      <Typography variant="caption"> (двойной клик по задаче - редактирование)</Typography>
    </Container>
  );
});

export default TodoList;
