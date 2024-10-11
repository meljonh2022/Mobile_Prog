import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import InfoText from './components/InfoText'; 
import DarkMode from './components/DarkMode';  
import Avatar from './components/Avatar'; 
import ExitButton from './components/ExitButton';  
export default function App() {
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Avatar />
      
      <InfoText 
        name="Meljonh Asoy"
        description="BSIT - 3R7" 
      />
      
      <DarkMode darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <StatusBar style="auto" />

      <ExitButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
});
