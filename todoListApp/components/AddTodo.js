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

  handleChange = (name, value) => {
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {text} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          multiline
          onChangeText={value => this.handleChange('text', value)}
          value={text}
        />
        <TouchableOpacity style={styles.addTodo} onPress={this.addTodo}>
          <Text style={styles.addTodoText}>addTodo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    height: 90,
  },
  textInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  addTodo: {
    backgroundColor: '#33118a',
    width: '30%',
  },
  addTodoText: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#fff',
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
