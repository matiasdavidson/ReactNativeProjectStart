import {StyleSheet} from 'react-native';
import {black, grey, white, green} from '@constants/colors';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  songContainer: {
    flexDirection: 'row',
    width: '95%',
    height: '95%',
    justifyContent: 'center',
    backgroundColor: grey,
    borderColor: black,
    alignSelf: 'center',
  },
  textComponent: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
  song: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
  },
  album: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
  },
  artist: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  buttonsComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    height: 40,
    width: 40,
    marginTop: 4,
    marginRight: 10,
    marginLeft: 10,
  },
  randombutton: {
    height: 30,
    width: 30,
    marginTop: 10,
    marginRight: 20,
  },
  loopbutton: {
    height: 30,
    width: 30,
    marginTop: 10,
    marginLeft: 20,
  },
  pauseButtonTouched: {
    opacity: 0,
    height: 0,
  },
  randomtouched: {
    tintColor: green,
  },
  looptouched: {
    tintColor: green,
  },
  cover: {
    marginTop: 10,
    height: 300,
    width: 300,
  },
  darkContainer: {
    backgroundColor: black,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textDark: {
    color: white,
  },
  actionButtonDark: {
    backgroundColor: white,
    borderRadius: 15,
  },
});

export default styles;
