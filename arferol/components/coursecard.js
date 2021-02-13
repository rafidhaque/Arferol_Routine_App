import React from 'react';
import {View,Text,StyleSheet,Image, Button} from 'react-native';

const Coursecard =(props)=>{
   console.log(props.navigation);
    return(
        <View style={styles.cardstyle}>
        

         <Image style={{width:60,height:60,marginStart:20,marginTop:33}}
             source={require('../assets/images/generic.png')
             }
        />
        <View style={styles.detailstyle}>
            <Text style={styles.textstyle}>Course Name:{props.title}</Text>
            <Text style={styles.textstyle} >Instructor:{props.instructor}</Text>
        <View style={styles.buttongroupstyle}>
            <Text> <Button title="View Classes" onPress={()=>{
                props.navigation.navigate("Classlist")
            }}> </Button> </Text>     
            <Text> <Button title="View Quiz" onPress={()=>{
                props.navigation.navigate("Quizlist")
            }} > </Button>   </Text> 
            <Text style={styles.buttonstyle}> <Button title="View Assignment" onPress={()=>{
                props.navigation.navigate("Assignmentlist")
            }}> </Button>  </Text> 
        </View>

         </View>      
        </View>
    )
    
};


const styles = StyleSheet.create({
   
    cardstyle:{
        backgroundColor: "#ffff",
        marginBottom:10,
        marginStart:10,
        marginEnd:10,   
        borderRadius:5,
        shadowOpacity: 0.50,
        shadowRadius: 10,
        elevation:10,
        flexDirection:"column",
    },
    detailstyle:{
        marginTop:9,
        marginStart:10,
        marginEnd:10,
        flexDirection:"column",
        alignSelf:"stretch"
          
    },
    buttongroupstyle:{
        flexDirection:"row", 
        marginLeft:-4,
        marginVertical:8,
        alignSelf:"stretch"
               
    },
    textstyle:{
        fontWeight:"bold",
        fontSize:15,
    },
    buttonstyle:{
        left:-7.1
    }


});


export default Coursecard;




