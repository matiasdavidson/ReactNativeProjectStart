import { StyleSheet } from 'react-native';
import { black, grey } from '@constants/colors'

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    songContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: grey,
        borderColor: black,
        borderWidth: 0.5,
        marginBottom: 10
    },
    textComponent: {
        width: '70%',
        paddingLeft: 8
    },
    title: {
        fontSize: 18
    },
    album: {
        fontSize: 16
    },
    artist: {
        fontSize: 14
    },
    buttonsComponent: {
        flexDirection: 'row',
        margin: 4
    },
    button: {
        height: 20,
        width: 20,
        marginRight: 30,
        marginTop: 4
    },
    pauseButtonTouched: {
        opacity: 0, 
        height: 0 
    }
});

export default styles;