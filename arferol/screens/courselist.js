import React from 'react';
import Header from '../components/header';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import Coursecard from '../components/coursecard';
const Courselist=(props)=>{
      console.log(props);
       return(
        <View style={styles.mainview}>
          <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
            title="Courses"
            >
         </Header>
          <Text style={styles.textstyle}>  
             Courses: 
         </Text>
        <ScrollView style={styles.coursetyle}>
           <Coursecard></Coursecard>
           <Coursecard></Coursecard>
           <Coursecard></Coursecard>
           <Coursecard></Coursecard>
           
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


export default Courselist;
