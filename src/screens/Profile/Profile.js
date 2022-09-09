import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';

import styles from './Profile.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {setCurrentUser} from '../../redux/authSlice';

const Profile = () => {
  //Necessary context data and states are created.
  const userSession = useSelector(state => state.auth.currentUser);
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(userSession.email);
  const [password, setPassword] = useState(userSession.password);
  const [userName, setUserName] = useState(userSession.userName);

  //Changed user data here is updated via context and storage.
  const save = async () => {
    setLoading(true);
    try {
      const userData = {
        ...userSession,
        email,
        password,
        userName,
      };
      await AsyncStorage.mergeItem('@userValue', JSON.stringify(userData));
      dispatch(setCurrentUser(userData));
    } catch (error) {
      console.log('Storage Write Error');
    }
    setLoading(false);
  };

  //Here, the inputs to update the user data and the save button are pressed on the screen.
  return (
    <SafeAreaView
      style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <Input
        placeholder="Email"
        theme={theme}
        placeholderTextColor="#C996CC"
        value={email}
        iconName="email"
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        theme={theme}
        placeholderTextColor="#C996CC"
        value={password}
        iconName="lock"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="User Name"
        theme={theme}
        placeholderTextColor="#C996CC"
        value={userName}
        iconName="at"
        onChangeText={setUserName}
      />
      <Button title="Save" loading={loading} onClick={save} />
    </SafeAreaView>
  );
};

export default Profile;
