import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';
import Header from '../components/header';

const Addnewassignment =(props)=>{
      const [coursetitle,setcoursetitle] = useState("");
      const [instructor,setinstructor] =  useState("");
      const [credit,setcredit] = useState(0);

      return(
          <View style={styles.viewstyle}>
               <Header toggledrawer={()=>{
                  props.navigation.toggleDrawer();
              }}
                title="Add Assignment"
              >
           </Header>
           <Text style={styles.textstyle}>Add:</Text>  
            <View style={styles.viewstyle}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2}}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Enter Assignment Detail"
                 
           />
           </View>
           <View style={styles.viewstyle}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Deadline"
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

export default Addnewassignment;