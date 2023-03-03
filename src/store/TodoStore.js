import { makeObservable, computed, action, observable } from "mobx";
import uniqueId from "lodash.uniqueid";

class TodoStore {
  todos = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      completedTodosCount: computed,
      todosList: computed,
      report: computed,
      addTodo: action,
      toggleCompleteTodo: action,
      renameTodo: action,
    });
  }

  get todosList() {
    return this.todos;
  }

  get completedTodosCount() {
    return this.todos.filter(
      (todo) => todo.completed === true
    ).length;
  }

  get report() {
    if (!this.todos.length) return 'Задач нет';

    const haveNotActiveTodoText = 'Новых задач нет.';
    const progressText = `Прогресс: ${this.completedTodosCount}/${this.todos.length}`;

    const activeTodos = this.todos.filter(todo => todo.completed === false);
    if (!activeTodos.length) return `${haveNotActiveTodoText} ${progressText}`;

    const nextTodo = this.todos.find(todo => todo.completed === false);
    const nextTodoText = `Следующая задача: "${nextTodo.task}".`;
    return `${nextTodoText} ${progressText}`;
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      id: Number(uniqueId()),
    });
  }

  toggleCompleteTodo(id) {
    const targetTodo = this.todos.find(todo => todo.id === id);
    targetTodo.completed = !targetTodo.completed;
  }

  renameTodo(id, newTask) {
    const targetTodo = this.todos.find(todo => todo.id === id);
    targetTodo.task = newTask;
  }
}

const todoStore = new TodoStore();
export default todoStore;
