import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../components/header";
import Quizdetail from "../components/quizdetail";
import firebase from "firebase";
import { authcontextdata } from "../contexts/authcontext";

const Quizlist = (props) => {
  console.log(props);
  let button;
  if (props.route.params == undefined) {
    button = false;
  } else {
    button = (
      <View style={{ padding: 10 }}>
        <Button
          title={props.route.params.button}
          onPress={() => {
            props.navigation.navigate("Addnewquiz");
          }}
        ></Button>
      </View>
    );
  }

  const [quizlist, setquizlist] = useState([]);

  const loadQuizzes = async () => {
    const temp = await firebase
      .firestore()
      .collection("users")
      .doc(authcontextdata().currentuser.email)
      .collection("courses")
      .doc(authcontextdata().clickedpost)
      .collection("quizzes")
      .get();

    console.log(temp.docs.map((doc) => doc.data()));
    setquizlist(temp.docs.map((doc) => doc.data()));
  };

  loadQuizzes();

  return (
    <View style={styles.mainview}>
      <Header
        toggledrawer={() => {
          props.navigation.toggleDrawer();
        }}
        title="Quizlist"
      ></Header>
      <Text style={styles.textstyle}>Quizlist:</Text>
      {button ? button : false}
      <ScrollView style={styles.coursetyle}>
        {quizlist.map((item) => {
          return (
            <Quizdetail
              key={item.coursetitle}
              title={item.coursetitle}
              instructor={item.instructor}
              syllabus={item.syllabus}
              status="Not Completed"
              time_remaining={item.date}
              date={item.date}
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

export default Quizlist;
