import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { AuthContext,authcontextdata } from "../contexts/authcontext";
const Coursecard = (props) => {
  console.log(props.navigation);
  console.log("Here in coursecard");
  return (

    <AuthContext.Consumer>  
      {(auth) => (
    <View style={styles.cardstyle}>
      <Image
        style={{ width: 60, height: 60, marginStart: 20, marginTop: 33 }}
        source={require("../assets/images/generic.png")}
      />
      <View style={styles.detailstyle}>
        <Text style={styles.textstyle}>Course Name:{props.title}</Text>
        <Text style={styles.textstyle}>Instructor:{props.instructor}</Text>
        <View style={styles.buttongroupstyle}>
          <Text>
            {" "}
            <Button
              title="View Classes"
              onPress={() => {
                auth.setclickedpost(props.title);
                props.navigation.navigate("Classlist", {
                  button: "ADD CLASS",
                  navigation: props.navigation
                
                });
              }}
            >
              {" "}
            </Button>{" "}
          </Text>
          <Text>
            {" "}
            <Button
              title="View Quiz"
              onPress={() => {
                auth.setclickedpost(props.title);
                props.navigation.navigate("Quizlist", {
                  button: "ADD QUIZ",
                  navigation: props.navigation
                  
                });
              }}
            >
              {" "}
            </Button>{" "}
          </Text>
          <Text style={styles.buttonstyle}>
            {" "}
            <Button
              title="View Assignment"
              onPress={() => {
                auth.setclickedpost(props.title);
                props.navigation.navigate("Assignmentlist", {
                  button: "ADD ASSIGNMENT",
                  navigation: props.navigation
                 
                });
              }}
            >
              {" "}
            </Button>{" "}
          </Text>
        </View>
      </View>
    </View>
      )}
    </AuthContext.Consumer>
      
  );
};

const styles = StyleSheet.create({
  cardstyle: {
    backgroundColor: "#ffff",
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: "column",
  },
  detailstyle: {
    marginTop: 9,
    marginStart: 10,
    marginEnd: 10,
    flexDirection: "column",
    alignSelf: "stretch",
  },
  buttongroupstyle: {
    flexDirection: "row",
    marginLeft: -4,
    marginVertical: 8,
    alignSelf: "stretch",
  },
  textstyle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonstyle: {
    left: -7.1,
  },
});

export default Coursecard;
