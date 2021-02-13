import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';
import Header from '../components/header'
import {Calendar} from 'react-native-calendars';
import {calculate_days_months_years_from_miliseconds} from '../funtionality/countdowntimer';

const Addnewquiz =(props)=>{
      const [syllabus,setsyllabus] =  useState("");
      const [date,setdate] = useState("");
      
const formatdate =()=>{

     let year =   new Date().getFullYear();
     let month = (new Date().getMonth())+1;
     let day =  new Date().getDate();
     setdate(year+"-"+month+"-"+day);
    // console.log(result);
    

}
    useEffect(() =>{
      formatdate();
    },[])


      return(
          <View style={styles.viewstyle}>
               <Header toggledrawer={()=>{
                  props.navigation.toggleDrawer();
              }}
                title="Addnewquiz"
              >
           </Header>
           <Text style={styles.textstyle}>Add:</Text>  
           <View style={styles.view}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 ,width:100,paddingLeft:33}}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Date"
           />
           <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2,width:100,paddingLeft:28 }}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Month"
           />
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2,width:152,paddingLeft:60 }}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Year"
           />

           </View>
          <View style={styles.syllbutton}>
           
            <Calendar 
                onDayPress={(day) => {console.log('selected day', day)}}
                markedDates={{
                     [date]:{selected: true, selectedColor: 'dodgerblue'}
                }}
             ></Calendar>
         

          </View>

           <View style={styles.syllbutton}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2,paddingLeft:10}}
                 onChangeText={function(currentvalue){

                 }}
                 placeholder="Syllabus"
           /> 
           </View>
           <View style={styles.syllbutton}> 
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
          padding:0,
          flexDirection:"column"
      },
      view:{
        flexDirection:"row",
        marginLeft:10,
        marginEnd:8,
        justifyContent:"space-between"
      },
      syllbutton:{
        marginTop:8,
        marginLeft:10,
        marginEnd:8
      }
     
  
});

export default Addnewquiz;