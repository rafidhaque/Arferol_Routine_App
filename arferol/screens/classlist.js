import React,{useState} from 'react';
import {View,Text,StyleSheet, ScrollView,Button} from 'react-native';
import Header from '../components/header';
import Classdetail from '../components/classdetail';
const Classlist =(props)=>{
  let button; 
  if(props.route.params==undefined){
    button = false;
  }
  else{
    button = props.route.params.button;
  }

  const [classes,setclasses] = useState([
    { 
      key:1,
      title:"CSE 4623 Mobile and App Development",
      instructor:"Tasnim Ahmed",
      time:"Wednesday 10:00 AM",
      status:"Not done"
    },
    { 
      key:2,
      title:"CSE 4617 Microprocessor and Interfacing",
      instructor:"Ashraful Alam",
      time:"Tuesday 10:00 AM",
      status:"Not done"
    },
    {
      key:3,
      title:"Math 4633 Probability and Statistics",
      instructor:"Abdul Hakim Khan",
      time:"Monday 10:00 AM",
      status:"Not done"
    } 
   ]) 
  console.log(props);
    return(
        <View style={styles.mainview}>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
              title="Classlist"
            >
         </Header>
         <Text style={styles.textstyle}>Classlist:</Text> 
        {button ? button : false}
      <ScrollView style={styles.coursetyle}>
         {
          classes.map((item) =>{
            return <Classdetail
               key = {item.key} 
               title={item.title}
               instructor ={item.instructor}
               time={item.time}
               status={item.status}
              />  
              })
          }
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


export default Classlist;
