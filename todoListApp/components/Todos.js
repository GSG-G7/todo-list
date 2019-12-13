import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';

import TodoItem from './TodoItem';

import {toggleTodoDoneAction} from '../store/actions/markTodoAction';
import {deleteTodoAction} from '../store/actions/deleteTodoAction';
import {fetchTodosAction} from '../store/actions/fetchTodosAction';

class Todos extends Component {
  state = {};

  componentDidMount() {
    const {fetchTodosDispatcher} = this.props;
    fetchTodosDispatcher();
  }

  toggleDone = (id, done) => {
    const {toggleDoneDispatcher} = this.props;
    toggleDoneDispatcher(id, done);
  };

  deleteTodo = id => {
    const {deleteTodoDispatcher} = this.props;
    deleteTodoDispatcher(id);
  };

  render() {
    const {todos} = this.props;

    return todos
      ? todos.map(todo => (
          <TodoItem
            style={styles.todo}
            key={todo.id}
            id={todo.id}
            text={todo.text}
            toggleDone={this.toggleDone}
            deleteTodo={this.deleteTodo}
            isDone={todo.done}
          />
        ))
      : null;
  }
}

const styles = StyleSheet.create({
  todo: {
    alignSelf: 'center',
    color: 'red',
  },
});

const mapStateToProps = state => {
  const {todos} = state;
  return {
    todos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodosDispatcher: () => dispatch(fetchTodosAction()),
    toggleDoneDispatcher: (id, done) => {
      dispatch(toggleTodoDoneAction(id, done));
    },
    deleteTodoDispatcher: id => {
      dispatch(deleteTodoAction(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);
