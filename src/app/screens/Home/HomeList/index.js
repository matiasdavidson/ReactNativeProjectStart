import React, {useContext} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import SongItem from '@components/SongItem';
import styles from './styles';
import ThemeContext from '@context/themeContext';
import SongsContext from '@context/songsContext';

function HomeList({}) {
  const {isLightTheme, toggleTheme} = useContext(ThemeContext);
  const keyExtractor = ({id}) => `Cancion: ${id}`;
  const {songs} = useContext(SongsContext);

  const renderItem = ({item}) => {
    const {title, artist, album, cover} = item;
    return (
      <SongItem title={title} artist={artist} album={album} cover={cover} />
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, isLightTheme && styles.darkContainer]}>
      {songs.length === 0 ? (
        <ActivityIndicator color="white" size="large" />
      ) : (
        <FlatList
          data={songs}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={[
            styles.contentContainer,
            isLightTheme && styles.darkContainer,
          ]}
        />
      )}
    </SafeAreaView>
  );
}

export default HomeList;
