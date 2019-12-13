import {db} from '../../components/configs/firebase';

export const DELETE_TODO = 'DELETE_TODO';

export const deleteTodoAction = payload => {
  return (dispatch, _getState) => {
    db.collection('todos')
      .doc(payload)
      .delete()
      .then(() => dispatch({type: DELETE_TODO, payload: {id: payload}}))
      .catch(console.log);
  };
};
