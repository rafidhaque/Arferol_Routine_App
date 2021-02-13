import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';
import Header from '../components/header';


const Calenderscreen = (props)=>{
    return(
        <View style={styles.mainview}>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
              title="Calender" >
         </Header>  
         
        { /* add Calender here in this region */ }

          </View>

       )

};

const styles = StyleSheet.create({
   
    mainview:{
      flex:1,  
    },
    coursetyle:{
      flex:1,
      flexDirection:"column"
    },
    textstyle:{
      fontSize:30,
      fontWeight:"bold",
      marginLeft:10
    }
   

});

export default Calenderscreen;

