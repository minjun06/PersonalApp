import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet,  View, Text, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home.js'
import Login from './components/login.js'
import Index from './components/index.js'
import Input from './components/input.js'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome to Workout Planner' }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Input" component={Input} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default MyStack;
