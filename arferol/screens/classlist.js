import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from '../components/header';
const Classlist =(props)=>{
   console.log(props);
    return(
        <View styles={styles.mainview}> 
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
            title="Classes"
            >
         </Header>
         <Text style={styles.textstyle}>Classlist</Text>  
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