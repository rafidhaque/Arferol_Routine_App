import React from 'react';
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import Header from '../components/header';
import Classdetail from '../components/classdetail';
const Classlist =(props)=>{
  console.log(props.navigation);
    return(
        <View style={styles.mainview}>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
              title="Classlist"
            >
         </Header>
         <Text style={styles.textstyle}>Classlist:</Text>  
      <ScrollView style={styles.coursetyle}>
            <Classdetail></Classdetail>
            <Classdetail></Classdetail>
            <Classdetail></Classdetail>
            <Classdetail></Classdetail>
            <Classdetail></Classdetail>
      </ScrollView>
      
        </View>
    )
}

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


export default Classlist;
