import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Pedometer, {
  PedometerInterface,
} from '@t2tx/react-native-universal-pedometer';

import './global';
import TrackPlayer from 'react-native-track-player';

//interface PedoResult : PedometerInterface | string | null;

export default class MyPedometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      test: 0,
      error: 'none',
    };
    this.myfunction();
  }

/*   check = () => {
    Pedometer.isStepCountingAvailable((error, result) => {
      console.log(error, result);
      this.setState({
        data: {result: result + ''},
        error,
      });
    });
  } */

/*   stop = () => {
    Pedometer.stopPedometerUpdates();
    this.setState({
      data: {state: 'stoped'},
      error: '-',
    });
  } */

/*   load = () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();

    Pedometer.queryPedometerDataBetweenDates(
      start.getTime(),
      end.getTime(),
      (error, data: PedometerInterface | null) => {
        console.log(error);
        console.log(data);
        this.setState({
          data: data || {},
          error,
        });
      },
    );
  } */

  increment = () => {
      this.setState({
        test: this.state.test + 1
      });
  }

  myfunction = () => {

    Pedometer.startPedometerUpdatesFromDate(
      new Date().setHours(0, 0, 0, 0),
      data => {
        this.setState({
          data: data || {},
          test: data["numberOfSteps"],
          error: '-',
        });
      },
    );
    
    setInterval(function() {
      global.newRate = 0.033*global.number+0.5;
      TrackPlayer.setRate(global.newRate);
      console.log("Display New Rate");
      console.log(global.newRate);
      global.number = 0;
    }, 5000); // x * 1000 milsec
  }


  render() {
    global.number++;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Button title=" +1 " onPress={this.increment} />
          </View>
        </View>
              <Text style={styles.text}>
                Nombre total de pas effectué : {this.state.test}
              </Text>
              <Text style={styles.text}>
                Nombre de pas effectué durant les 5 dernières secondes : {global.number}
              </Text>
              <Text style={styles.text}>
                MusicRate : {global.newRate}
              </Text>
      </View>
    );
  }
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