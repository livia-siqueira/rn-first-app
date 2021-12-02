import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [output, setOutPut] = useState('Open up App.js to start working on your app!')


  const handleClick = () => {
    setOutPut((output) => {
     return  output === 'Hi, sucess' ?  'Open up App.js to start working on your app!' :  'Hi, sucess'
    } )
  }
  return (
    <View style={styles.container}>
      <Text>{output}</Text>
      <Button onPress={handleClick} title="Click me!"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
