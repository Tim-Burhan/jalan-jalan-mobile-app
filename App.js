import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {connect} from 'react-redux';

import Welcome from './src/screens/Welcome';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import MyBooking from './src/screens/MyBooking';
import ChatHome from './src/screens/ChatHome';
import EditProfile from './src/screens/EditProfile';
import BookingDetail from './src/screens/BookingDetail';
import Search from './src/screens/Search';
import SearchResult from './src/screens/SearchResults';
import FlightDetail from './src/screens/FlightDetail';
import ChatRoom from './src/screens/ChatRoom';

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
          {props.auth.token === null ? (
            <React.Fragment>
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
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Stack.Screen
                name="Dashboard"
                component={BottomTab}
                options={{headerShown: false}}
              />
              <Stack.Screen
                component={Search}
                name="search"
                options={{headerShown: false}}
              />
              <Stack.Screen
                component={SearchResult}
                name="searchResults"
                options={{headerShown: false}}
              />
              <Stack.Screen
                component={FlightDetail}
                name="detail"
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ChatHome"
                component={ChatHome}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="BookingDetail"
                component={BookingDetail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ChatRoom"
                component={ChatRoom}
                options={{headerShown: false}}
              />
            </React.Fragment>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={ref => Toast.setRef(ref)} />
    </NativeBaseProvider>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(App);
