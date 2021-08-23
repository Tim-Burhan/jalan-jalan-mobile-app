import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Welcome from './src/screens/Welcome';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import MyBooking from './src/screens/MyBooking';
import ChatHome from './src/screens/ChatHome';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        barStyle={styles.background}
        activeColor="#0AC77B"
        inactiveColor="#979797">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="compass-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyBooking"
          component={MyBooking}
          options={{
            tabBarLabel: 'My Booking',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="calendar-clock"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
});

const App = props => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={BottomTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChatHome"
            component={ChatHome}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
