import {db} from '../../components/configs/firebase';

export const FETCH_ALL_TODOS = 'FETCH_ALL_TODOS';

export const fetchTodosAction = () => {
  return (dispatch, _getState) => {
    db.collection('todos')
      .get()
      .then(querySnapshot => {
        const fetchedTodos = [];
        querySnapshot.forEach(doc => {
          fetchedTodos.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        return fetchedTodos;
      })
      .then(fetchedTodos => {
        dispatch({type: FETCH_ALL_TODOS, payload: {initTodos: fetchedTodos}});
      })
      .catch(console.log);
  };
};
