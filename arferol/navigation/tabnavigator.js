import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import Homescreen from '../screens/homescreen';
import Notificationscreen from '../screens/notificationscreen'

const Tab = createMaterialBottomTabNavigator();

const Tabnavigator =()=>{
     return(
        <Tab.Navigator initialRouteName="HomeScreen" barStyle={{ backgroundColor: '#3F51B5'}}>
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" color="white" size={26} />
              ) : (
                <AntDesign name="home" color="white" size={22} />
              ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notificationscreen}
          options={{
            tabBarLabel: "Notifications",
            
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-notifications" size={26} color="white" />
              ) : (
                <Ionicons
                  name="ios-notifications-outline"
                  size={22}
                  color="white"
                />
              ),
          }}
        />
      </Tab.Navigator>
    )
}

export default Tabnavigator;



