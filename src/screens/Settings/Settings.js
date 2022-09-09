import React from 'react';
import {View, Image, SafeAreaView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Settings.style';
import Button from '../../components/Button';
import {resetUser} from '../../redux/authSlice';

const Settings = ({navigation}) => {
  //Necessary states are created.
  const userSession = useSelector(state => state.auth.currentUser);
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  //Here is the transition to the theme page.
  const goTheme = () => {
    navigation.navigate('Theme');
  };

  //Here is the transition to the profile page.
  const goEditProfile = () => {
    navigation.navigate('Profile');
  };

  //Here, user data is deleted via context and storage.
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem('@userData');
      await AsyncStorage.removeItem('@themeData');
      dispatch(resetUser());
    } catch (error) {
      console.log('Storage Write Error');
    }
  };

  //Here, the user picture, logout button and buttons that switch to other pages are printed on the screen.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: 'https://picsum.photos/id/1010/150'}}
          style={styles.image}
        />
      </View>
      <Text
        style={theme === 'light' ? styles.lightUserName : styles.darkUserName}>
        {'@ ' + userSession.userName}
      </Text>
      <Button title="Theme" onClick={goTheme} />
      <Button title="Edit profile" onClick={goEditProfile} />
      <Button title="Log out" onClick={logOut} />
    </SafeAreaView>
  );
};

export default Settings;
