import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './Tabs';
import Detail from './../screens/Detail';

const Stack = createNativeStackNavigator();

//It is the navigation structure that will be displayed when the login is still made.
const ContentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerStyle: {backgroundColor: '#916BBF'},
          headerTintColor: 'white',
          headerTitle: 'Movie Detail',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ContentStack;