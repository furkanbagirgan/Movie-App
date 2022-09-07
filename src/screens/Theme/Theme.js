import React, { useState } from 'react';
import {Text, View, SafeAreaView, TouchableHighlight} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Theme.style';

const Theme = () => {
  //Necessary context data and states are created.
  const [theme,setTheme]=useState('light');
  //const {theme, setTheme} = useTheme();

  //Here, the existing theme is changed according to the clicked theme.
  const changeTheme = async themeName => {
    try {
      await AsyncStorage.removeItem('@themeValue');
      await AsyncStorage.setItem('@themeValue', JSON.stringify(themeName));
      //setTheme(themeName);
    } catch (error) {
      console.log('Storage Write Error');
    }
  };

  //Here, 2 themes and their names are printed on the screen.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <View style={styles.themeWrapper}>
        <TouchableHighlight
          onPress={() => changeTheme('light')}
          underlayColor="#eee">
          <View style={styles.lightTheme} />
        </TouchableHighlight>
        <Text
          style={
            theme === 'light' ? styles.lightThemeText : styles.darkThemeText
          }>
          Light
        </Text>
      </View>
      <View style={styles.themeWrapper}>
        <TouchableHighlight
          onPress={() => changeTheme('dark')}
          underlayColor="#eee">
          <View style={styles.darkTheme} />
        </TouchableHighlight>
        <Text
          style={
            theme === 'light' ? styles.lightThemeText : styles.darkThemeText
          }>
          Dark
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Theme;
