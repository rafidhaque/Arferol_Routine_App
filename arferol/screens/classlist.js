import React from 'react';
import {View,Text} from 'react-native';
import Header from '../components/header';
const Classlist =(props)=>{
   console.log(props);
    return(
        <View>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}>
         </Header>
         <Text style={{justifyContent:"center",alignContent:"center"}}>Classlist</Text>  
        </View>
    )

}

export default Classlist;