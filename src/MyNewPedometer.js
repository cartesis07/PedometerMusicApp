import React from 'react';
import {View, Text, StyleSheet, Button, useRef, useState, setState} from 'react-native';

import Pedometer, {
  PedometerInterface,
} from '@t2tx/react-native-universal-pedometer';
import './global';
import TrackPlayer from 'react-native-track-player';

export default function MyNewPedometer(){

    const mystate = {
        data: {},
        test: 0,
      };

    const previous = {
        value: 0
    };

    const increment = () => {
        mystate.test++;
        console.log(mystate.test);
    }

    const launch = () => {

        console.log("LAUNCHED");
        Pedometer.startPedometerUpdatesFromDate(
          new Date().setHours(0, 0, 0, 0),
          data => {
            mystate.test = mystate.data["numberOfSteps"];
            mystate.test = mystate.test - previous.value;
            console.log("test value");
            console.log(mystate.test);
            previous.value =  mystate.data["numberOfSteps"];
            console.log("previous value");
            console.log(previous.value);
         },
        );
        
          setInterval(function() {
          global.newRate = 0.033*mystate.test + 0.5;
          TrackPlayer.setRate(global.newRate);
          console.log("Display New Rate");
          console.log(global.newRate);

          const start = new Date();
          start.setHours(0, 0, 0, 0);
          const end = new Date();
        }, 5000); // x * 1000 milsec
      }

      launch();
    

    return(
        <View style={styles.container}>
        <View style={styles.row}>
        <View style={styles.rowItem}>
            <Button title=" +1 " onPress={increment} />
          </View>
        </View>
              <Text style={styles.text}>
                Nombre de pas durant les 5 dernières secondes : {mystate.test}
              </Text>
              <Text style={styles.text}>
                MusicRate : {global.newRate}
              </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      marginTop: 50
    },
    row: {
      flexDirection: 'row',
    },
    rowItem: {
      margin: 3,
      color: "#FFFFFF"
    },
    text: {
      fontSize: 15,
      textAlign: "center",
      color: "#FFFFFF"
    },
  });