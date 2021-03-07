import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import TrackPlayer, {useProgress} from 'react-native-track-player';
//import {useProgress} from 'react-native-track-player/lib/hooks'
import Slider from '@react-native-community/slider';

const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  };

export default function SliderComp() {

    const {position, duration} = useProgress();
    
    const handleChange = (val) => {
        TrackPlayer.seekTo(val);
    }

    return(
        <View>
            <Slider
                style={{width: 320, height: 40}}
                minimumValue={0}
                maximumValue={duration}
                value={position}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#00FFFF"
                thumbTintColor="#FFFFFF"
                onSlidingComplete={handleChange}
            />
            <View style = {styles.timerContainer}>
                <Text style = {styles.timer}> {formatTime(position)} </Text>
                <Text style = {styles.timer}>{formatTime(duration)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    timerContainer: {
        flexDirection: 'row',
        justifyContent : "space-between",
    },
    timer:{
        color : "#fff",
        fontSize: 15
    }
});