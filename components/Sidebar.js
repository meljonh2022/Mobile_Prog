import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sidebar() {
  return (
    <View style={styles.sidebar}>
      <Text style={styles.menuItem}>Dashboard</Text>
      <Text style={styles.menuItem}>Settings</Text>
      <Text style={styles.menuItem}>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 80,
    backgroundColor: '#333',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menuItem: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
