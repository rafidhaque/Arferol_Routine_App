import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,TextInput, Button,Pic, ScrollView} from 'react-native';
import Header from '../components/header'
import {Calendar} from 'react-native-calendars';
import {Picker} from '@react-native-community/picker'

const Addnewquiz =(props)=>{
      const [syllabus,setsyllabus] =  useState("");
      const [date,setdate] = useState("");
      const [day,setday] =useState("day");
      const [month,setmonth] = useState("month");
      const [year,setyear] = useState("year");
      const [time,settime] = useState("");
      const [pickedhour,setpickedhour] = useState(0);
      const [pickedminute,setpickedminute] = useState(0);
      const [am_pm,set_am_pm] =useState('AM')
     // return markedDates

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
      
      <AuthContext.Consumer>  
      {(auth) => (
          <ScrollView style={styles.viewstyle}>
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
      <Picker
          selectedValue={pickedhour}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setpickedhour(itemValue)}
      >   
      <Picker.Item label ="0" value={0}></Picker.Item> 
      <Picker.Item label ="1" value={1}></Picker.Item> 
      <Picker.Item label ="2" value={2}></Picker.Item> 
      <Picker.Item label ="3" value={3}></Picker.Item> 
      <Picker.Item label ="4" value={4}></Picker.Item> 
      <Picker.Item label ="5" value={5}></Picker.Item> 
      <Picker.Item label ="6" value={6}></Picker.Item> 
      <Picker.Item label ="8" value={7}></Picker.Item> 
      <Picker.Item label ="9" value={9}></Picker.Item>  
      <Picker.Item label ="10" value={10}></Picker.Item> 
      <Picker.Item label ="11" value={11}></Picker.Item> 
      <Picker.Item label ="12" value={12}></Picker.Item> 
      
      </Picker>

      <Picker
          selectedValue={pickedminute}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setpickedminute(itemValue)}
      >  
       <Picker.Item label ="0" value={0}></Picker.Item>  
       <Picker.Item label ="1" value={1}></Picker.Item> 
      <Picker.Item label ="2" value={2}></Picker.Item> 
      <Picker.Item label ="3" value={3}></Picker.Item> 
      <Picker.Item label ="4" value={4}></Picker.Item> 
      <Picker.Item label ="5" value={5}></Picker.Item> 
      <Picker.Item label ="6" value={6}></Picker.Item> 
      <Picker.Item label ="8" value={7}></Picker.Item> 
      <Picker.Item label ="9" value={9}></Picker.Item>  
      <Picker.Item label ="10" value={10}></Picker.Item> 
      <Picker.Item label ="11" value={11}></Picker.Item> 
      <Picker.Item label ="12" value={12}></Picker.Item> 
      <Picker.Item label ="13" value={13}></Picker.Item> 
      <Picker.Item label ="14" value={14}></Picker.Item> 
      <Picker.Item label ="15" value={15}></Picker.Item> 
      <Picker.Item label ="16" value={16}></Picker.Item> 
      <Picker.Item label ="17" value={17}></Picker.Item> 
      <Picker.Item label ="18" value={18}></Picker.Item> 
      <Picker.Item label ="19" value={19}></Picker.Item> 
      <Picker.Item label ="20" value={20}></Picker.Item> 
      <Picker.Item label ="21" value={21}></Picker.Item> 
      <Picker.Item label ="22" value={22}></Picker.Item> 
      <Picker.Item label ="23" value={23}></Picker.Item> 
      <Picker.Item label ="24" value={24}></Picker.Item> 
      <Picker.Item label ="25" value={25}></Picker.Item>  
      <Picker.Item label ="26" value={26}></Picker.Item> 
      <Picker.Item label ="27" value={27}></Picker.Item> 
      <Picker.Item label ="28" value={28}></Picker.Item> 
      <Picker.Item label ="29" value={29}></Picker.Item> 
      <Picker.Item label ="30" value={30}></Picker.Item> 
      <Picker.Item label ="31" value={31}></Picker.Item> 
      <Picker.Item label ="32" value={32}></Picker.Item> 
      <Picker.Item label ="33" value={33}></Picker.Item> 
      <Picker.Item label ="34" value={34}></Picker.Item> 
      <Picker.Item label ="35" value={35}></Picker.Item> 
      <Picker.Item label ="36" value={36}></Picker.Item> 
      <Picker.Item label ="37" value={37}></Picker.Item> 
      <Picker.Item label ="38" value={38}></Picker.Item> 
      <Picker.Item label ="39" value={39}></Picker.Item> 
      <Picker.Item label ="40" value={40}></Picker.Item> 
      <Picker.Item label ="41" value={41}></Picker.Item>  
      <Picker.Item label ="42" value={42}></Picker.Item> 
      <Picker.Item label ="43" value={43}></Picker.Item> 
      <Picker.Item label ="44" value={44}></Picker.Item> 
      <Picker.Item label ="45" value={45}></Picker.Item> 
      <Picker.Item label ="46" value={46}></Picker.Item> 
      <Picker.Item label ="47" value={47}></Picker.Item> 
      <Picker.Item label ="48" value={48}></Picker.Item> 
      <Picker.Item label ="49" value={49}></Picker.Item> 
      <Picker.Item label ="50" value={50}></Picker.Item> 
      <Picker.Item label ="51" value={51}></Picker.Item> 
      <Picker.Item label ="52" value={52}></Picker.Item>  
      <Picker.Item label ="53" value={53}></Picker.Item> 
      <Picker.Item label ="54" value={54}></Picker.Item> 
      <Picker.Item label ="55" value={55}></Picker.Item> 
      <Picker.Item label ="56" value={56}></Picker.Item> 
      <Picker.Item label ="57" value={57}></Picker.Item> 
      <Picker.Item label ="58" value={58}></Picker.Item> 
      <Picker.Item label ="59" value={59}></Picker.Item> 
      </Picker>

      <Picker selectedValue={am_pm}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => set_am_pm(itemValue)}
      >   
      <Picker.Item label ="AM" value="AM"></Picker.Item> 
      <Picker.Item label ="PM" value="PM"></Picker.Item> 

      </Picker>



      </View>
     
          

          
           
           <View style={styles.syllbutton}>  
            <TextInput
                 style={{ height: 125, borderColor: 'dodgerblue', borderWidth: 2,paddingLeft:10}} 
                 onChangeText={function(currentvalue){
                   console.log("currentvalue");

                 }}
                 placeholder="Syllabus"
           /> 
           </View>
           <View style={styles.syllbutton}> 
               <Button title="Confirm" onPress={() => {
                 let finaltime = pickedhour+":"+pickedminute+" "+am_pm
                firebase
                  .firestore()
                  .collection("users")
                  .doc(auth.currentuser.email)
                  .collection("courses")
                  .doc(auth.clickedpost).collection("quizzes")
                  .add({
                    coursetitle: auth.clickedpost,
                    date:date,
                    syllabus:syllabus,
                    time:finaltime
                  }).then(()=>{
                    alert("Class successfully added");
                  });
                  }}>
                    
                  </Button>
          </View>
          </ScrollView>
      )}
    </AuthContext.Consumer>  
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
        marginEnd:8,
        marginBottom:25
      }
     
  
});

export default Addnewquiz;