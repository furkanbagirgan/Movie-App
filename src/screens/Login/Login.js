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

const Login = () => {
  //Necessary states are created.
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  //The user data entered here and the initial theme are saved to the authSlice and storage.
  const login = async () => {
    setLoading(true);
    try {
      //const response=await axios.get(`http://localhost:3000/userLogins`);
      const response={status:200,data:{
        id: 1,
        email: "furkanbrgn@gmail.com",
        password: "sifre123",
        userName: "furkanbrgn",
        firstName: "Furkan",
        lastName: "Bağırgan"
      }};
      if(response.status === 200){
        const userLogins=response.data;
        if(userLogins.length !== 0){
          await AsyncStorage.setItem('@userData', JSON.stringify(userLogins));
          await AsyncStorage.setItem('@themeData', JSON.stringify('light'));
          dispatch(setCurrentUser(userLogins));
          dispatch(setTheme('light'));
        }
        else{
          Alert.alert("Hata","Bu email adresine sahip bir hesap bulunamadı!");
        }
      }
      else{
        Alert.alert("Hata","Bağlantı hatası!");
      }
    } catch (error) {
      console.log(error.message);
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
      <Button title="Login" loading={loading} onClick={login} />
    </SafeAreaView>
  );
};

export default Login;
