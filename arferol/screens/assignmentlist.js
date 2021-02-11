import React from 'react';
import {View,Text} from 'react-native';
import Header from '../components/header';

const Assignmentlist =(props)=>{

    return(
        <View>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
              title="Assignments"
            >
         </Header>
         <Text style={{justifyContent:"center",alignContent:"center"}}> Assignmentlist</Text>  
        </View>
    )
}

export default Assignmentlist;