/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {Switch} from 'react-native';
import HomeList from '@screens/Home/HomeList';
import ItemDetail from '@screens/ItemDetail';
import ThemeContext, {themes} from '@context/themeContext';
import SongsContext from '@context/songsContext';
import {defaultNavOptions} from '@constants/navigation';
import axios from 'axios';

const AppStack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const isLightTheme = theme === themes.light;
  const toggleTheme = () => setTheme(isLightTheme ? themes.dark : themes.light);

  const [songs, getSongs] = useState([]);
  useEffect(() => {
    axios
    .get ('https://private-e0d978-apiproyectoreactnativematias.apiary-mock.com/songs').then((res) => getSongs(res.data)).catch((err) => console.log(err.response));
  }, []);

  return (
    <SongsContext.Provider value={{songs}}>
      <ThemeContext.Provider value={{theme, isLightTheme, toggleTheme}}>
        <NavigationContainer>
          <AppStack.Navigator
            initialRouteName="Home"
            screenOptions={defaultNavOptions(isLightTheme)}>
            <AppStack.Screen
              name="inicio"
              component={HomeList}
              options={{
                title: 'inicio',
                headerRight: () => (
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={theme ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleTheme}
                    value={theme}
                  />
                ),
              }}
            />
            <AppStack.Screen
              name="Cancion"
              component={ItemDetail}
              options={{
                title: 'detalle',
                headerRight: () => (
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={theme ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleTheme}
                    value={theme}
                  />
                ),
              }}
              initialParams={{title: 'No title'}}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    </SongsContext.Provider>
  );
};

export default App;
