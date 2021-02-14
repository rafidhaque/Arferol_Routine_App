import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../components/header";
import Assignmentdetail from "../components/assignmentdetail";
import firebase from "firebase";
import { authcontextdata } from "../contexts/authcontext";

const Assignmentlist = (props) => {
  let button;
  if (props.route.params == undefined) {
    button = false;
  } else {
    button = (
      <View style={{ padding: 10 }}>
        <Button
          title={props.route.params.button}
          onPress={() => {
            props.navigation.navigate("Addnewassignment");
          }}
        ></Button>
      </View>
    );
  }

  const [assignments, setassignments] = useState([]);

  const loadAssignments = async () => {
    const temp = await firebase
      .firestore()
      .collection("users")
      .doc(authcontextdata().currentuser.email)
      .collection("courses")
      .doc(authcontextdata().clickedpost)
      .collection("assignments")
      .get();

    console.log(temp.docs.map((doc) => doc.data()));
    setassignments(temp.docs.map((doc) => doc.data()));
  };

  loadAssignments();

  return (
    <View style={styles.mainview}>
      <Header
        toggledrawer={() => {
          props.navigation.toggleDrawer();
        }}
        title="Assignments"
      ></Header>
      <Text style={styles.textstyle}>Assignmentlist:</Text>
      {button ? button : false}
      <ScrollView style={styles.coursetyle}>
        {assignments.map((item) => {
          return (
            <Assignmentdetail
              key={item.coursetitle}
              title={item.coursetitle}
              instructor={item.instructor}
              description={item.details}
              time={item.time}
              status="Not Complete"
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
  },
  coursetyle: {
    flex: 1,
    flexDirection: "column",
  },
  textstyle: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Assignmentlist;
