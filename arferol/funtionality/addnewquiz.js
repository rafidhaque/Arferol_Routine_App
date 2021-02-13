import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';
import Header from '../components/header';

const Addnewquiz =(props)=>{
      const [date,setdate] = useState("");
      const [syllabus,setsyllabus] =  useState("");

      return(
          <View style={styles.viewstyle}>
               <Header toggledrawer={()=>{
                  props.navigation.toggleDrawer();
              }}
                title="Addnewquiz"
              >
           </Header>
           <Text style={styles.textstyle}>Add:</Text>  
           <View style={styles.viewstyle}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Date"
           /> 
           </View>


           <View style={styles.viewstyle}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Syllabus"
           /> 
           </View>
           <View style={styles.viewstyle}> 
               <Button title="Confirm"></Button>
          </View>
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
      },
      viewstyle:{
          padding:10
      }
     
  
});

export default Addnewquiz;