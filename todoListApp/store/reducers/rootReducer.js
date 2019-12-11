const initState = {
  todos: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQUEST_STARTED':
      return state;
    case 'ADD_TODO':
      const {todos} = state;
      todos.push(action.payload);
      const newState = {todos};
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
