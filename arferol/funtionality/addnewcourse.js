import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';
import Header from '../components/header';
import firebase from 'firebase';
import "firebase/firestore";

import {AuthContext, authcontextdata,AuthProvider} from '../contexts/authcontext';


const Addnewcourse =(props)=>{
      const [coursetitle,setcoursetitle] = useState("");
      const [instructor,setinstructor] =  useState("");
      const [credit,setcredit] = useState(0);
      const authContext = useContext(AuthContext) ; 
      const [loading, setLoading] = useState(true);

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
                   setcoursetitle(currentvalue);

                 }}
                 placeholder="Enter Course Name"
           /> 
           </View>
            <View style={styles.viewstyle}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2}}
                 onChangeText={function(currentvalue){
                  setinstructor(currentvalue);

                 }}
                 placeholder="Enter Instuctor Name"
                 
           />
           </View>
           <View style={styles.viewstyle}>  
            <TextInput
                 style={{ height: 40, borderColor: 'dodgerblue', borderWidth: 2 }}
                 onChangeText={function(currentvalue){
                   setcredit(currentvalue);

                 }}
                 placeholder="Enter Credit"
           />
          </View>

          <View style={styles.viewstyle}> 
               <Button title="Confirm" onPress={function () {


                setLoading(true);
              
   
   

                firebase.firestore().collection('users').doc(authContext.uid).collection("courses").add({
                    course_title: coursetitle,
                    instructor: instructor,
                    credit: credit,
                    classes: [],
                    quizes : [],
                    assignments:[],

                    
             
                    created_at: firebase.firestore.Timestamp.now()
                  })

                  
               
.then(()=>
{
setLoading(false);
 alert('Upload Courses Successfully!');
}).catch((error)=>{
setLoading(false);
alert(error)

})



} 
}
               ></Button>
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

