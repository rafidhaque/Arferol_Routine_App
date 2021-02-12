import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from '../components/header';
import Quizdetail from '../components/quizdetail';
const Quizlist =(props)=>{
    
    return(
        <View style={styles.mainview}>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
              title="Quizlist"
            >
         </Header>
         <Text style={styles.textstyle}>Quizlist:</Text>  
      <Quizdetail></Quizdetail>
      <Quizdetail></Quizdetail>
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


export default Quizlist;
