import React from 'react';
import {View,Text} from 'react-native';
import Header from '../components/header';
const Quizlist =(props)=>{
    
    return(
        <View>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}>
         </Header>
         <Text style={{justifyContent:"center",alignContent:"center"}}>Quizlist</Text>  
        </View>
    )
}

export default Quizlist;
