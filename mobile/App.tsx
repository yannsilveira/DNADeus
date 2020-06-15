import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { IndieFlower_400Regular, useFonts } from '@expo-google-fonts/dev'
import { AppLoading } from 'expo';

export default function App() {
  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
        <Routes />
      </>
    );

  }
}
