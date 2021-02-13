import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from '../components/header';

const Addnewcourse =(props)=>{
      const [coursetitle,setcoursetitle] = useState("");
      const [instructor,setinstructor] =  useState("");
      const [credit,setcredit] = useState(0);

      return(
          <View style={styles.mainview}>
               <Header toggledrawer={()=>{
                  props.navigation.toggleDrawer();
              }}
                title="Add Assignment"
              >
           </Header>
           <Text style={styles.textstyle}>Add:</Text>  
           <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){

                 }}
                 value="Enter Course Title"
           />
           <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){

                 }}
                 value="Enter Instuctor Name"
           />
          <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){

                 }}
                 value="Enter Credit"
           />


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

export default Addnewcourse;

