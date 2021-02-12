import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
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
         <Assignmentdetail></Assignmentdetail>
         <Assignmentdetail></Assignmentdetail>
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