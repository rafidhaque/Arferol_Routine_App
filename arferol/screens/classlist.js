import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../components/header";
import Classdetail from "../components/classdetail";
import firebase from "firebase";
import { authcontextdata } from "../contexts/authcontext";

const Classlist = (props) => {
  let button;
  if (props.route.params == undefined) {
    button = false;
  } else {
    button = (
      <View style={{ padding: 10 }}>
        <Button
          title={props.route.params.button}
          onPress={() => {
            props.navigation.navigate("Addnewclass");
          }}
        ></Button>
      </View>
    );
  }

  const [classes, setclasses] = useState([]);

  const loadClasses = async () => {
    const temp = await firebase
      .firestore()
      .collection("users")
      .doc(authcontextdata().currentuser.email)
      .collection("courses")
      .doc(authcontextdata().clickedpost)
      .collection("classes")
      .get();

    console.log(temp.docs.map((doc) => doc.data()));
    setclasses(temp.docs.map((doc) => doc.data()));
  };

  loadClasses();

  console.log(props);
  return (
    <View style={styles.mainview}>
      <Header
        toggledrawer={() => {
          props.navigation.toggleDrawer();
        }}
        title="Classlist"
      ></Header>
      <Text style={styles.textstyle}>Classlist:</Text>
      {button ? button : false}
      <ScrollView style={styles.coursetyle}>
        {classes.map((item) => {
          return (
            <Classdetail
              key={item.coursetitle}
              title={item.coursetitle}
              time={item.date}
              status="Not Attended"
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

export default Classlist;
