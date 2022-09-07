import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import styles from './Signup.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {setCurrentUser} from '../../redux/authSlice';
import {setTheme} from '../../redux/themeSlice';

const Signup = () => {
  //Necessary states are created.
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  //The user data entered here and the initial theme are saved to the authSlice and storage.
  const signup = async () => {
    setLoading(true);
    try {
      const userData = {
        email,
        password,
        userName
      };
      await AsyncStorage.setItem('@userData', JSON.stringify(userData));
      await AsyncStorage.setItem('@themeData', JSON.stringify('light'));
      dispatch(setCurrentUser(userData));
      dispatch(setTheme('light'));
    } catch (error) {
      console.log('Storage Write Error');
    }
    setLoading(false);
  };

  //Here, inputs for user data and button are pressed to the screen.
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Movie App</Text>
      <Input
        placeholder="Email"
        placeholderTextColor="#C996CC"
        value={email}
        iconName="email"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#C996CC"
        value={password}
        iconName="lock"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="Repeat Password"
        placeholderTextColor="#C996CC"
        value={repeatPassword}
        iconName="lock"
        onChangeText={setRepeatPassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="User Name"
        placeholderTextColor="#C996CC"
        value={userName}
        iconName="at"
        onChangeText={setUserName}
      />
      <Button title="Sign Up" loading={loading} onClick={signup} />
    </SafeAreaView>
  );
};

export default Signup;
