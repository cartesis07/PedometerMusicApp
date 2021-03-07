import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';

export default function RateSlider() {
    
    const handleChange = (val) => {
        TrackPlayer.setRate(val);
    }

    return(
        <View>
            <Slider
                style={{width: 320, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#00FFFF"
                thumbTintColor="#FFFFFF"
                onSlidingComplete={handleChange}
                value={1}
            />
        </View>
    )
}

const styles = StyleSheet.create({});