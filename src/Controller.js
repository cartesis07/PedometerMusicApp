
import React, {useEffect, useState} from "react";
import { View, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

export default function Controller({ onNext, onPrv }) {

  const playbackState = usePlaybackState();
  const [isPlaying, setIsPlaying] = useState("loading");

  useEffect(() =>{
    if(playbackState === 3){
      setIsPlaying("playing");
    }else if(playbackState === 2){
      setIsPlaying("paused");
    } else{
      setIsPlaying("loading");
    }
  }, [playbackState]);
  
  const renderPlayPauseBtn = ()=>{
    switch (isPlaying){
      case "playing":
        return <Icon name="pause" size={45} color="#FFFFFF"/>;
      case "paused":
        return <Icon name="play-arrow" size={45} color="#FFFFFF"/>;
      default:
        return <ActivityIndicator size={45} color="#FFFFFF"/>;
    }
  };
  
  const onPlayPause = ()=>{
    //console.log(playbackState);
    if(playbackState === 3){
      TrackPlayer.pause();
    }else if(playbackState === 2){
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrv}>
        <Icon name="skip-previous" size={45} color="#FFFFFF"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause}>
        {renderPlayPauseBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Icon name="skip-next" size={45} color="#FFFFFF"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 350
  },
});

