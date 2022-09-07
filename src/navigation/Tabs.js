import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home'
import Search from '../screens/Search'
import SettingsStack from '../screens/SettingsStack'

const Tab = createBottomTabNavigator();

//Here, the tabs required for the bottom navigation are created and the necessary settings are made.
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        //Here the tabBar icon is set according to the page name.
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconSize;
          if (route.name === 'Home') {
            iconName = 'home';
            iconSize = 30;
          } else if (route.name === 'Search') {
            iconName = 'search';
            iconSize = 35;
          } else if (route.name === 'Settings') {
            iconName = 'cog';
            iconSize = 30;
          }

          return <Icon name={iconName} size={iconSize} color={color} />;
        },
        headerStyle: {backgroundColor: '#916BBF'},
        headerTintColor: 'white',
        tabBarActiveTintColor: '#3D2C8D',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#916BBF',
        tabBarInactiveBackgroundColor: '#916BBF',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;