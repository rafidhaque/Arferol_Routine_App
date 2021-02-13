import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button,Pi} from 'react-native';
import Header from '../components/header'
import {Calendar} from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

const Addnewquiz =(props)=>{
      const [syllabus,setsyllabus] =  useState("");
      const [date,setdate] = useState("");
      const [day,setday] =useState("day");
      const [month,setmonth] = useState("month");
      const [year,setyear] = useState("year");
      const [mode,setmode] = useState(false);
      const [time,settime] = useState("");

     // return markedDates

const handletime = (event, selectedDate) => {
      setmode(false);
      let date = selectedDate.toISOString().split('T')[1]
      console.log(date);
      let result = date.split(":");
      console.log(result[0]);
      console.log(result[1]);
      console.log(result[2]);
}
const formatdate =()=>{
     let a =   new Date().getFullYear();
     let b = (new Date().getMonth())+1;
     let c =  new Date().getDate();
     setday(c);
     setmonth(b);
     setyear(a);
     
     if(month<=9){
      setdate(a+'-'+'0'+b+"-"+c);
     }
     else{
      setdate(a+'-'+b+"-"+c);
     }   
}

const updatedatebox =()=>{
   let result = date.split("-");
   setyear(result[0]);
   setmonth(result[1]);
   setday(result[2]);
}

    useEffect(() =>{
      formatdate();
    },[])
    useEffect(() =>{
      updatedatebox();
    },[date])


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
            <Text
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 ,width:100,paddingLeft:42,paddingTop:10}}
            > 
             {day}
            </Text>
            <Text
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2,width:100,paddingLeft:45,paddingTop:10}}
            >
            {month}
            </Text>
            <Text
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2,width:152,paddingLeft:57,paddingTop:10 }}
            >
            {year}
           </Text>
        </View>
          <View style={styles.syllbutton}>
           
            <Calendar 
                onDayPress={(day) => {
                  console.log(day.dateString)
                  setdate(day.dateString);
                }
              }
                 markedDates={{
                  [date]:{selected:true,selectedColor:"dodgerblue"}
                }}
             ></Calendar>
         

          </View>
          <View style={styles.view}>
            <Text
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 ,width:100,paddingLeft:31,paddingTop:10}}
            > 
            Hours
           </Text>
           <Text
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 ,width:100,paddingLeft:25,paddingTop:10}}
            > 
            Minutes
           </Text>
           <Text
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 ,width:100,paddingLeft:38,paddingTop:10}}
            > 
            PM
           </Text>

           {mode ?     
              <DateTimePicker
              testID="dateTimePicker"
              value={new Date()}
              mode='time'
              is24Hour={true}
              display="default"
              onChange={handletime}
              
             />:false }
          

           </View>
           <View style={styles.syllbutton}> 
               <Button title="Set Time" onPress={()=>{
                 setmode(true);
               }}></Button>
          </View>

           <View style={styles.syllbutton}>  
            <TextInput
                 style={{ height: 155, borderColor: 'dodgerblue', borderWidth: 2,paddingLeft:10}} 
                 onChangeText={function(currentvalue){
                   console.log("currentvalue");

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
        marginTop:8,
        justifyContent:"space-between"
      },
      syllbutton:{
        marginTop:8,
        marginLeft:10,
        marginEnd:8
      }
     
  
});

export default Addnewquiz;