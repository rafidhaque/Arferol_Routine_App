import React, { useState,useEffect,useContext} from 'react';
import Header from '../components/header';
import firebase from 'firebase';
import "firebase/firestore";

import {View,Text,StyleSheet,ScrollView, Button,ActivityIndicator} from 'react-native';
import Coursecard from '../components/coursecard';
import {AuthContext, authcontextdata,AuthProvider} from '../contexts/authcontext';
const Courselist=(props)=>{
    
     const [courses, setCourses] = useState([]);
     const [UploadCourse, setUploadCourse] = useState('');
     const [show,setShow]=useState(false)
     const [loading, setLoading] = useState(true);
    
     const authContext = useContext(AuthContext)  

     const loadCourses = async () => {
      setLoading(true);
      firebase
        .firestore()
        .collection("users")
        .doc(authContext.uid)
        .collection("courses")
        .orderBy("created_at", "desc")
        .onSnapshot((querySnapshot) => {
          let temp_courses = [];
          querySnapshot.forEach((doc) => {
            temp_courses.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setCourses(temp_courses);
         if (courses != null)
         {

          setLoading(false);
        }})
      ;
        
    };
  
    useEffect(() => {
      loadCourses();
    }, []);    
  if (!loading) {  return(

      
        <View style={styles.mainview}>
          <Header toggledrawer={()=>{
                props.navigation.toggleDrawer();
            }}
            title="Courses"
            >
         </Header>
          <Text style={styles.textstyle}>  
             Courses: 
         </Text>
      <View style={{padding:10}}><Button title="Add Course" onPress={()=>{
            props.navigation.navigate("Addnewcourse");
            console.log(authContext);
      }}>
      </Button>
      </View>  
        <ScrollView style={styles.coursetyle}>
           {
           courses.map((item) =>{
           return <Coursecard
                key = {item.key} 
                title={item.title}
                instructor ={item.instructor}
                navigation={props.navigation}
               />  
            })
          }
          </ScrollView>   
        </View>

       )  } else {
        return (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="red" animating={true} />
          </View>
        );
      } 
      
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


export default Courselist;
