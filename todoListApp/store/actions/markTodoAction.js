import { db } from '../../components/configs/firebase';

export const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';

export const toggleTodoDoneAction = payload => {
  return (dispatch, _getState) => {
    // promises.all();
    db.collection('todos')
      .doc(payload)
      .get()
      .then(doc => {
        return doc.data().done;
      })
      .then(done => {
        db.collection('todos')
          .doc(payload)
          .update({
            done: !done,
          });
        dispatch({ type: TOGGLE_TODO_DONE, payload: { id: payload } });
      })
      .catch(console.log);
  };
};
