import React from 'react';
import {Text, View, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Theme.style';
import {setTheme} from '../../redux/themeSlice';

const Theme = () => {
  //Necessary context data and states are created.
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  //Here, the existing theme is changed according to the clicked theme.
  const changeTheme = async themeName => {
    try {
      await AsyncStorage.removeItem('@themeData');
      await AsyncStorage.setItem('@themeData', JSON.stringify(themeName));
      dispatch(setTheme(themeName));
    } catch (error) {
      console.log('Storage Write Error');
    }
  };

  //Here, 2 themes and their names are printed on the screen.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <View style={styles.themeWrapper}>
        <TouchableWithoutFeedback
          onPress={() => changeTheme('light')}
          underlayColor="#eee">
          <View style={styles.lightTheme} />
        </TouchableWithoutFeedback>
        <Text
          style={
            theme === 'light' ? styles.lightThemeText : styles.darkThemeText
          }>
          Light
        </Text>
      </View>
      <View style={styles.themeWrapper}>
        <TouchableWithoutFeedback
          onPress={() => changeTheme('dark')}
          underlayColor="#eee">
          <View style={styles.darkTheme} />
        </TouchableWithoutFeedback>
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
