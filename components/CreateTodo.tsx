import React, { useContext, useState } from 'react';
import TodoContext from '../contexts/TodoContext';
import { ADD_TODO } from '../reducers/TodoReducer';
const CreateTodo = () => {
  const [, todoDispatch] = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const addTodo = () => todoDispatch({ type: ADD_TODO, todo: todo });
  return (
    <div>
      <input
        type="text"
        placeholder="enter todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default CreateTodo;
