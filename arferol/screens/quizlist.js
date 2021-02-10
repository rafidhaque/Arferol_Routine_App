import React from 'react';
import {View} from 'react-native';
import Header from '../components/header';
const Quizlist =(props)=>{
    
    return(
        <View>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}>
         </Header>
        Quizlist
        </View>
    )
}

export default Quizlist;
