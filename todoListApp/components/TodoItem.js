import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ id, text, toggleDone, isDone, deleteTodo }) => (
  <View style={styles.todoWraper}>
    <Text style={[styles.todoText, isDone ? styles.doneText : '']}>{text}</Text>
    <View style={styles.todoButtons}>
      {toggleDone && (
        <TouchableOpacity
          style={[styles.btn, styles.btnText, styles.doneBtn]}
          onPress={() => {
            toggleDone(id);
          }}>
          <Text style={styles.btnText}>{isDone ? 'redo' : 'mark as done'}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={[styles.btn, styles.btnText, styles.deleteBtn]}>
        <Text
          style={styles.btnText}
          onPress={() => {
            deleteTodo(id);
          }}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoWraper: {
    flex: 1,
    width: '70%',
    height: 180,
    backgroundColor: '#990a8a',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 10,
  },
  todoText: {
    fontSize: 18,
    margin: 10,
    color: '#fff',
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  btn: {
    backgroundColor: 'blue',
    flex: 1,
    textAlign: 'center',
    height: '100%',
  },
  btnText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  todoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
  },
  doneBtn: {
    backgroundColor: '#660a8a',
  },
  deleteBtn: {
    backgroundColor: '#660a8a',
  },
});

export default TodoItem;
