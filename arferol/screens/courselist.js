import React from 'react';
import Header from '../components/header';
import {View,Text} from 'react-native';

const Courselist=(props)=>{
      console.log(props);
       return(
        <View>
          <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}>
         </Header>
         <Text style={{justifyContent:"center",alignContent:"center"}}>  
        Courses
        </Text>
        </View>
    )
}

export default Courselist;
