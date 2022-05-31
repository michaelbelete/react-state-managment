import React, { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';
import { DELETE_TODO } from '../reducers/TodoReducer';
const TodoItem = ({ todo }) => {
  const [, todoDispatch] = useContext(TodoContext);
  const deleteItem = () => {
    todoDispatch({ type: DELETE_TODO, id: todo.id });
  };
  return (
    <li>
      {todo.todo}
      <button>edit</button>
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
};

export default TodoItem;
