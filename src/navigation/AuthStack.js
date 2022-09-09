import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './../screens/Login';
import Signup from './../screens/Signup';

const Stack = createNativeStackNavigator();

//It is the navigation structure that will be shown in case there is no entry yet.
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerStyle: {backgroundColor: '#3D2C8D'},
          headerTintColor: '#C996CC',
          headerTitle: 'Sign Up',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
