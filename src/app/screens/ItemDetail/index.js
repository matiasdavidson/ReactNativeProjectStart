import React, {useState, useContext} from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import playButton from '@assets/play-button.png';
import previousButton from '@assets/previous-track.png';
import nextButton from '@assets/next-button.png';
import pauseButton from '@assets/pausados.png';
import randomButon from '@assets/random.png';
import loopButton from '@assets/loop.png';
import ThemeContext from '@context/themeContext';

import styles from './styles';

function ItemDetail({route}) {
  const {title, album, artist, cover} = route.params;
  const {isLightTheme} = useContext(ThemeContext);
  const [touched, setTouched] = useState(false);
  const handlePress = () => {
    setTouched(!touched);
  };

  const [randomized, unrandomized] = useState(false);
  const randomize = () => {
    unrandomized(!randomized);
  };

  const [looped, unlooped] = useState(false);
  const loop = () => {
    unlooped(!looped);
  };
  return (
    <SafeAreaView>
      <View
        style={[styles.songContainer, isLightTheme && styles.darkContainer]}>
        <View>
          <Image source={{ uri: cover }} style={styles.cover} />
          <View style={styles.textComponent}>
            <Text style={[styles.song, isLightTheme && styles.textDark]}>
              {title}
            </Text>
            <Text style={[styles.album, isLightTheme && styles.textDark]}>
              {album}
            </Text>
            <Text style={[styles.artist, isLightTheme && styles.textDark]}>
              {artist}
            </Text>
          </View>
          <View style={styles.buttonsComponent}>
            <TouchableOpacity onPress={randomize}>
              <Image
                style={[
                  styles.button,
                  styles.randombutton,
                  randomized && styles.randomtouched,
                  isLightTheme && styles.actionButtonDark,
                ]}
                source={randomButon}
              />
            </TouchableOpacity>
            <Image
              style={[styles.button, isLightTheme && styles.actionButtonDark]}
              source={previousButton}
            />
            <View>
              <TouchableOpacity onPress={handlePress}>
                <Image
                  style={[
                    styles.button,
                    touched && styles.pauseButtonTouched,
                    isLightTheme && styles.actionButtonDark,
                  ]}
                  source={playButton}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePress}>
                <Image
                  style={[
                    styles.button,
                    styles.pauseButton,
                    !touched && styles.pauseButtonTouched,
                    isLightTheme && styles.actionButtonDark,
                  ]}
                  source={pauseButton}
                />
              </TouchableOpacity>
            </View>
            <Image
              style={[styles.button, isLightTheme && styles.actionButtonDark]}
              source={nextButton}
            />
            <TouchableOpacity onPress={loop}>
              <Image
                style={[
                  styles.button,
                  styles.loopbutton,
                  looped && styles.looptouched,
                  isLightTheme && styles.actionButtonDark,
                ]}
                source={loopButton}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ItemDetail;
