import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>TodoList</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    backgroundColor: '#444499',
    height: 50,
  },
  navbarTitle: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 7,
  },
});

export default Navbar;
