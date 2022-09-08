import React, {useState} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {setCurrentUser} from '../../redux/authSlice';
import {setTheme} from '../../redux/themeSlice';
import axios from 'axios';

const Login = ({navigation}) => {
  //Necessary states are created.
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  //By checking the email from the server, user data and the first theme value are saved to redux and storage.
  const login = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://192.168.1.4:3000/userLogins?email=${email}`,
      );
      if (response.status === 200 || response.status === 304) {
        const userLogin = response.data;
        if (userLogin.length !== 0) {
          await AsyncStorage.setItem('@userData', JSON.stringify(userLogin[0]));
          await AsyncStorage.setItem('@themeData', JSON.stringify('light'));
          dispatch(setCurrentUser(userLogin[0]));
          dispatch(setTheme('light'));
        } else {
          Alert.alert('Error', 'No account found with this email address!');
        }
      } else {
        Alert.alert('Error', 'Connection error!');
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };

  //Here is the transition to the sign up page.
  const goToSignup = () => {
    navigation.navigate('Signup');
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
      <Button title="Login" loading={loading} onClick={login} />
      <Text style={styles.signupText}>Don't have an account?</Text>
      <Button title="Sign Up" onClick={goToSignup} />
    </SafeAreaView>
  );
};

export default Login;
