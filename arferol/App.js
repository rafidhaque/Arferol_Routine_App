import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackScreen from './navigation/authstack';
import firebase from 'firebase';
import {authcontextdata,AuthProvider} from './contexts/authcontext';


var firebaseConfig = {
  apiKey: "AIzaSyAEF7D1zGr03lrJ6suMUQwwjp5ZG5grQWQ",
  authDomain: "iutroutineapp.firebaseapp.com",
  projectId: "iutroutineapp",
  storageBucket: "iutroutineapp.appspot.com",
  messagingSenderId: "766237182545",
  appId: "1:766237182545:web:04b7d6fc6a9c85daf1c670"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
       <AuthStackScreen/>
     </NavigationContainer>
    </AuthProvider>
    
  );
}
