import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {db} from './configs/firebase';

const AddTodo = () => {
  const [value, setText] = useState('add your todo');

  const addTodo = () => {
    db.collection('todos')
      .add({
        text: value,
        done: false,
      })
      .then(() => {
        setText('');
      })
      .catch(err => {
        console.log('catched error');
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <TextInput multiline value={value} onChangeText={setText} />
      <TouchableOpacity onPress={addTodo}>
        <Text>addTodo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    backgroundColor: 'red',
    flexDirection: 'row',
  },
});

export default AddTodo;
