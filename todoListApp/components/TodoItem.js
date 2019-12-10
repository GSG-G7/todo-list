import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TodoItem = ({id, text, markDone, deleteTodo}) => (
  <View style={styles.todoWraper}>
    <Text style={styles.todoText}>{text}</Text>
    <View style={styles.todoButtons}>
      {markDone && (
        <TouchableOpacity
          style={[styles.btn, styles.btnText, styles.doneBtn]}
          onPress={() => {
            markDone(id);
          }}>
          <Text style={styles.btnText}>Done</Text>
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
    backgroundColor: '#7ECFD9',
    justifyContent: 'space-between',
  },
  todoText: {
    fontSize: 18,
    margin: 10,
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
    backgroundColor: '#33D542',
  },
  deleteBtn: {
    backgroundColor: '#F72B38',
  },
});

export default TodoItem;
