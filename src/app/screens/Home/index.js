import React from 'react';
import { SafeAreaView } from 'react-native';
import SongItem from '@components/SongItem';
import albumCover from '@assets/albumcover.png';
import enchastre from '@assets/loutaenchastre.png'

import styles from './styles'

const song = 'Sunday Morning';
const album = 'The Velvet Underground & Nico';
const artist = 'The Velvet Underground';

function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <SongItem  
            cover={albumCover} 
            song={song} 
            album={album} 
            artist={artist}
            />
            <SongItem  
            cover={enchastre} 
            song={'Puede Ser'} 
            album={'Enchastre'} 
            artist={'Louta'}
            />
        </SafeAreaView>
    )
}

export default Home;