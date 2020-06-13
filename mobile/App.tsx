import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/assets/logodna.png')} style={{ width: 300, height: 300}}/>
      <Text style={styles.hometext}>Ola... Bem Vindo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hometext: {
    fontSize: 30,
    color: '#fff'
  },
});
