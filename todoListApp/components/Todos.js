import React, {useState, useEffect} from 'react';

import TodoItem from './TodoItem';

import {db} from './configs/firebase';

const Todos = ({done = false}) => {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: 'simple todo',
    },
  ]);

  useEffect(() => {
    db.collection('todos')
      .where('done', '==', done)
      .get()
      .then(snapshot => {
        const fetchedTodos = [];
        snapshot.forEach(doc =>
          fetchedTodos.push({
            id: doc.id,
            ...doc.data(),
          }),
        );
        return fetchedTodos;
      })
      .then(setTodos);
  }, [done]);

  const markDone = id => {
    db.collection('todos')
      .doc(id)
      .update({
        done: true,
      })
      .catch(console.log);
  };

  const deleteTodo = id => {
    console.log('mark deleted');
    db.collection('todos')
      .doc(id)
      .delete()
      .catch(console.log);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return todos.map(todo => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      text={todo.text}
      markDone={!done ? markDone : undefined}
      deleteTodo={deleteTodo}
    />
  ));
};

export default Todos;
