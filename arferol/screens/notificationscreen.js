import React from 'react';
import Header from '../components/header';
import {View,Text} from 'react-native';
const Notificationscreen =(props)=>{

    return(
        <View>
            <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}>
         </Header>
          <Text>Notification</Text>  
        </View>
    )
}

export default Notificationscreen;