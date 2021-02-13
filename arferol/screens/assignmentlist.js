import React,{useState} from 'react';
import {View,Text,StyleSheet, ScrollView} from 'react-native';
import Header from '../components/header';
import Assignmentdetail from '../components/assignmentdetail';
const Assignmentlist =(props)=>{
  let button; 
  if(props.route.params==undefined){
    button = false;
  }
  else{
    button = props.route.params.button;
  }

  const [assignments,setassignments] = useState([
    { 
      key:1,
      title:"CSE 4623 Mobile and App Development",
      instructor:"Tasnim Ahmed",
      description:"Implement blog App",
      status:"Not done"
    },
    { 
      key:2,
      title:"CSE 4617 Microprocessor and Interfacing",
      instructor:"Ashraful Alam",
      description:"Draw Timing Diagram",
      status:"Not done"
    },
    {
      key:3,
      title:"Math 4633 Probability and Statistics",
      instructor:"Abdul Hakim Khan",
      description:"Queing theory",
      status:"Not done"
    } 
   ]) 


    return(
        <View style={styles.mainview}>
             <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
              title="Assignments"
            >
         </Header>
         <Text style={styles.textstyle}>Assignmentlist:</Text>
         {button ? button : false}
         <ScrollView style={styles.coursetyle}>
           
              {
                assignments.map((item) =>{
                return <Assignmentdetail
                     key = {item.key} 
                     title={item.title}
                     instructor ={item.instructor}
                     description={item.description}
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

export default Assignmentlist;