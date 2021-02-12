import React from 'react';
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import Header from '../components/header';
import Assignmentdetail from '../components/assignmentdetail';
const Assignmentlist =(props)=>{

    return(
        <View style={styles.mainview}>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
              title="Assignments"
            >
         </Header>
         <Text style={styles.textstyle}>Assignmentlist:</Text>  
         <ScrollView style={styles.coursetyle}>
            <Assignmentdetail></Assignmentdetail>
            <Assignmentdetail></Assignmentdetail>
            <Assignmentdetail></Assignmentdetail>
            <Assignmentdetail></Assignmentdetail>
            <Assignmentdetail></Assignmentdetail>

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

export default Assignmentlist;