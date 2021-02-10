import React from 'react';
import Header from '../components/header';
import {View,Text} from 'react-native';

const Homescreen =(props)=>{
      console.log(props);
       return(
        <View>
          <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}>
         </Header>
          <Text>HomeScreen</Text>  
        </View>
    )
}

export default Homescreen;
