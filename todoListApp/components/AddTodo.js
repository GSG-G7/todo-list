import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import {addTodoAction} from '../store/actions/addTodoAction';

class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = () => {
    const {dispathTodo} = this.props;
    dispathTodo({...this.state, done: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput multiline onChangeText={text => this.setState({text})} />
        <TouchableOpacity onPress={this.addTodo}>
          <Text>addTodo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    backgroundColor: 'red',
    flexDirection: 'row',
  },
});

const mapStateToProps = state => {
  const {todos} = state;
  return {todos};
};

const mapDispatchToProps = dispath => {
  return {
    dispathTodo: todo => dispath(addTodoAction(todo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
