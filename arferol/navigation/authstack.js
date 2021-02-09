import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "./../screens/Login";
import SignUp from "./../screens/SignUp";
const AuthStack = createStackNavigator();
const AuthStackScreen = ()=>{

    return (
        <AuthStack.Navigator initialRouteName="Login" >
        <AuthStack.Screen
          name ="Login"
          component={Login}
          options ={{headerShown:false}}
        /> 
        <AuthStack.Screen
          name ="SignUp"
          component={SignUp}
          options ={{headerShown:false}}
        /> 
        
        </AuthStack.Navigator>

    )

};

export default AuthStackScreen;