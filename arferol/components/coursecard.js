import React from 'react';
import {View,Text,StyleSheet,Image, Button} from 'react-native';

const Coursecard =(props)=>{
   
    return(
        <View style={styles.cardstyle}>
        

         <Image style={{width:60,height:60,marginStart:20,marginTop:33}}
             source={require('../assets/images/generic.png')
             }
        />
        <View style={styles.detailstyle}>
            <Text style={styles.textstyle}>Course Name:CSE 4623 Mobile and App Development </Text>
            <Text style={styles.textstyle} >Instructor:Tasnim Ahmed</Text>
        <View style={styles.buttongroupstyle}>
            <Text> <Button title="View Classes"> </Button> </Text>     
            <Text> <Button title="View Quiz"> </Button>   </Text> 
            <Text style={styles.buttonstyle}> <Button title="View Assignment"> </Button>  </Text> 
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
        height:215,
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




