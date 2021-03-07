//import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlayerScreen from './src/PlayerScreen';
import MyPedometer from "./src/MyPedometer";
import MyNewPedometer from "./src/MyNewPedometer";

export default function App() {

  return (
    <View style={styles.container}>
      <MyNewPedometer/>
      <PlayerScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
    // alignItems: 'center',
    justifyContent: 'center',
  },
})