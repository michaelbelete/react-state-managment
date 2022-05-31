import * as React from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import './style.css';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
export default function App() {
  const initialTodo = () => [{ id: 1, todo: 'default', completed: false }];
  const [TodoState, TodoDispatch] = React.useReducer(
    TodoReducer,
    [],
    initialTodo
  );
  return (
    <TodoContext.Provider value={[TodoState, TodoDispatch]}>
      <CreateTodo />
      <TodoList />
    </TodoContext.Provider>
  );
}
