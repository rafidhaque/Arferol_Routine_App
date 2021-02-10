import React from 'react';
import {View} from 'react-native';
import Header from '../components/header';

const Assignmentlist =(props)=>{

    return(
        <View>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}>
         </Header>
        Assignmentlist
        </View>
    )
}

export default Assignmentlist;