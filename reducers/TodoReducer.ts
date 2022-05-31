import TodoContext from '../contexts/TodoContext';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.length + 1,
        todo: action.todo,
        completed: false,
      };

      return [...state, newTodo];

    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id != action.id;
      });

    default:
      return state;
  }
};

export default TodoReducer;
