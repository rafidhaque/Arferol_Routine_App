import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Coursecard from "../components/coursecard";
import { AuthContext, authcontextdata } from "../contexts/authcontext";
import firebase from "firebase";

const Courselist = (props) => {
  const [courses, setcourses] = useState([]);

  const loadCourses = async () => {
    const temp = await firebase
      .firestore()
      .collection("users")
      .doc(authcontextdata().currentuser.email)
      .collection("courses")
      .get();
    console.log(temp.docs.map((doc) => doc.data()));
    setcourses(temp.docs.map((doc) => doc.data()));
  };

  loadCourses();

  return (
    <View style={styles.mainview}>
      <Header
        toggledrawer={() => {
          props.navigation.toggleDrawer();
        }}
        title="Courses"
      ></Header>
      <Text style={styles.textstyle}>Courses:</Text>
      <View style={{ padding: 10 }}>
        <Button
          title="Add Course"
          onPress={() => {
            props.navigation.navigate("Addnewcourse");
          }}
        ></Button>
      </View>
      <ScrollView style={styles.coursetyle}>
        {courses.map((item) => {
          return (
            <Coursecard
              key={item.coursetitle}
              title={item.coursetitle}
              instructor={item.instructor}
              navigation={props.navigation}
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

export default Courselist;
