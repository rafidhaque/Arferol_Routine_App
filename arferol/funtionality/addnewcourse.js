import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';
import Header from '../components/header';

const Addnewcourse =(props)=>{
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
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Enter Course Name"
           /> 
           </View>
            <View style={styles.viewstyle}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2}}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Enter Instuctor Name"
                 
           />
           </View>
           <View style={styles.viewstyle}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Enter Credit"
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

export default Addnewcourse;

