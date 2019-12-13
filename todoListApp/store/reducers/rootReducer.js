import {
  FETCH_ALL_TODOS,
  ADD_TODO,
  TOGGLE_TODO_DONE,
  DELETE_TODO,
} from '../actions';

const initState = {
  todos: [],
};

const rootReducer = (state = initState, action) => {
  const { type, payload } = action;
  let { todos } = state;
  todos = todos.map(e => ({ ...e }));

  switch (type) {
    case FETCH_ALL_TODOS: {
      const { initTodos } = payload;
      return { ...state, todos: initTodos };
    }
    case ADD_TODO: {
      const newTodos = [...todos];
      newTodos.unshift(payload);
      return { ...state, todos: newTodos };
    }
    case DELETE_TODO: {
      const newTodos = todos.filter(e => e.id !== payload.id);
      return { ...state, todos: newTodos };
    }
    case TOGGLE_TODO_DONE: {
      console.log('in Toggle case');
      const { id } = payload;
      const todo = todos.find(e => e.id === id);
      todo.done = !todo.done;
      console.log(todo);
      return {
        ...state,
        todos,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
