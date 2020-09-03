import {StyleSheet} from 'react-native';
import {grey, white, black} from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  darkContainer: {
    backgroundColor: black,
    justifyContent: 'center',
    alignSelf: 'center',
    color: white,
  },
  button: {
    backgroundColor: grey,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: black,
    width: '50%',
    height: 50,
  },
});

export default styles;
