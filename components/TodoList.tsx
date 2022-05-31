import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../contexts/TodoContext';
const TodoList = () => {
  const [todoState] = useContext(TodoContext);
  return (
    <div>
      <ul>
        {todoState &&
          todoState.map((todo, todoIndex) => (
            <TodoItem todo={todo} key={todoIndex} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
