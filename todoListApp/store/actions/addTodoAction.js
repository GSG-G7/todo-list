import {db} from '../../components/configs/firebase';

export const actionType = 'ADD_TODO';

export const addTodoAction = payload => {
  return (dispatch, _getState) => {
    dispatch({type: 'REQUEST_STARTED'});
    db.collection('todos')
      .add({
        text: payload.text,
        done: payload.done,
      })
      .then(docRef => {
        return docRef.get();
      })
      .then(ref =>
        dispatch({type: actionType, payload: {id: ref.id, ...ref.data()}}),
      )
      .catch(console.log);
  };
};
