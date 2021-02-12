import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


const Classdetail =(props)=>{

    return(
        <View style={styles.cardstyle}> 

            <View style={styles.detailstyle}>
                <Text style={styles.textstyle}>Course Name:CSE 4623 Mobile and App Development </Text>
                <Text style={styles.textstyle}>Instructor:Tasnim Ahmed</Text>
                <Text style={styles.textstyle}>Time: 9:00 PM</Text>
                <Text style={styles.textstyle}>Status:Not Attended</Text>
                    <View style={styles.buttongroupstyle}>
                        <Text style={styles.buttonstyle}> <Button title="Mark as attended"> </Button> </Text>     
                    </View>

           </View>

        </View>

    )
}

const styles = StyleSheet.create({
   
    cardstyle:{
        backgroundColor: "#ffff",
        marginBottom:10,
        marginStart:10,
        marginEnd:10,   
        borderRadius:5,
        height:165,
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
        alignSelf:"stretch",

               
    },
    textstyle:{
        fontWeight:"bold",
        fontSize:15,
    },
    buttonstyle:{
        left:0,
               
    }


});

export default Classdetail;