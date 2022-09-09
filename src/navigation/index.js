import React, {useCallback, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './AuthStack';
import ContentStack from './ContentStack';
import {setCurrentUser} from '../redux/authSlice';
import {setTheme} from '../redux/themeSlice';

const Navigation = () => {
  //The current user information and setCurrentUser function is accessed with the useSelector and useDispatch hook.
  const userSession = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();

  //Checking if there is any user data saved in the storage. If there is, this user information is saved in redux.
  const getUserData = useCallback(async () => {
    try {
      const userData = await AsyncStorage.getItem('@userData');
      const themeData = await AsyncStorage.getItem('@themeData');
      if (userData !== null) {
        const user = JSON.parse(userData);
        dispatch(setCurrentUser(user));
      }
      if (themeData !== null) {
        const theme = JSON.parse(themeData);
        dispatch(setTheme(theme));
      }
    } catch (e) {
      console.log('Storage Read Error');
    }
  }, [dispatch]);

  //It makes the getUserData function run when the application is first launched.
  useEffect(() => {
    getUserData();
  }, [getUserData]);

  //Here, the appropriate navigation structure is displayed on the screen according to the user input status.
  return (
    <NavigationContainer>
      {userSession.userName ? <ContentStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
