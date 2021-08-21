import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Welcome from './src/screens/Welcome';
import Signup from './src/screens/Signup';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
