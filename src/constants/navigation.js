import React from 'react';
import {black, white} from '@constants/colors';

export const defaultNavOptions = isLightTheme => ({
  headerStyle: {
    backgroundColor: isLightTheme ? black : white,
    borderBottomColor: isLightTheme ? white : black,
    borderBottomWidth: 1,
  },
  headerTintColor: isLightTheme ? white : black,
  // headerRigth: () => (
  //   <Switch
  //     trackColor={{false: '#767577', true: '#81b0ff'}}
  //     thumbColor="white"
  //     ios_backgroundColor="#3e3e3e"
  //   />
  // ),
});
