import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.label}>Dark Mode</Text>
      <Switch
        value={darkMode}
        onValueChange={toggleDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
  },
});

export default DarkMode;
