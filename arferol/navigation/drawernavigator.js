import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


const AppDrawerScreen = () => {
    return (
      <AppDrawer.Navigator>
        <AppDrawer.Screen name="Home" component={HomeTabScreen} />
        <AppDrawer.Screen name="Profile" component={ProfileScreen} />
        <AppDrawer.Screen name="commentscreen" component={commentscreen}  options={{
                  drawerLabel: () => null,
                  title: null,
                  drawerIcon: () => null
              }}/>
      </AppDrawer.Navigator>
    );
  };



