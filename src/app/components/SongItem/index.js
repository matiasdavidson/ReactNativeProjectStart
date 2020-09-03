/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import playButton from '@assets/play-button.png';
import previousButton from '@assets/previous-track.png';
import nextButton from '@assets/next-button.png';
import pauseButton from '@assets/pausados.png'
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

function SongItem({ title, album, artist, cover }) {
  const navigation = useNavigation();

  const handleNavigateToDetail = () => navigation.navigate('Cancion', { title, artist, album, cover });
  const [touched, setTouched] = useState(false);
  const handlePress = () => {
    setTouched(!touched);
  };
  
  return (
    <TouchableOpacity onPress={handleNavigateToDetail}>
      <View style={styles.songContainer}>
          <Image style={styles.image} source={{uri: cover}} />
          <View style={styles.textComponent}>
            <Text
              style={styles.title}>
              {title}
            </Text>
            <Text
              style={styles.album}>
              {album}
            </Text>
            <Text
              style={styles.artist}>
              {artist}
            </Text>
              <View style={styles.buttonsComponent}>
                  <Image style={styles.button} source={previousButton} />
                  <View>
                      <TouchableOpacity onPress={handlePress}>
                        <Image style={[styles.button, touched && styles.pauseButtonTouched]} source={playButton} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={handlePress}>
                        <Image style={[styles.button, styles.pauseButton, !touched && styles.pauseButtonTouched]} source={pauseButton} />
                      </TouchableOpacity>
                  </View>
                  <Image style={styles.button} source={nextButton} />
              </View>
          </View>
        </View>
        </TouchableOpacity>
  );
};

export default SongItem;
