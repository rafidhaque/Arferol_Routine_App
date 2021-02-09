import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackScreen from './navigation/authstack';
import SignUp from './screens/SignUp'

export default function App() {
  return (
     <NavigationContainer>
       <AuthStackScreen/>
     </NavigationContainer>
  );
}
