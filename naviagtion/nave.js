// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Home from '../screens/Home';
import Scanner from '../screens/Scanner';
import CheakOut from '../screens/cheakoutScanner';
// import Scanner from '../screens/Scanner';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{headerShown: false}}
          component={Signup}
        />
        <Stack.Screen name="Home" component={Home}  options={{headerShown: false}} />
        <Stack.Screen name="Scanner" component={Scanner}  options={{headerShown: false}} />
        <Stack.Screen name="CheakOut" component={CheakOut}  options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
