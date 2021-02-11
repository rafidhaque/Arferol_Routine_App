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
            <Text style={styles.textstyle}>Course Name:CSE 4623 Mobile and App Development</Text>
            <Text style={styles.textstyle} >Instructor:Tasnim Ahmed</Text>
        <View style={styles.buttongroupstyle}>
        <Button title="View Classes"> </Button>   
        <Button title="View Quiz"> </Button>  
        <Button title="View Assignment"> </Button>  
        </View >

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
        height:320,
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
    },
    buttongroupstyle:{
        flexDirection:"column", 
        marginLeft:2,
        marginVertical:6 

    },
    textstyle:{
        fontWeight:"bold",
        fontSize:14,
     
        
    }
  

});


export default Coursecard;




