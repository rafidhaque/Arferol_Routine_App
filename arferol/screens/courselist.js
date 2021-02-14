import React, { useState } from "react";
import Header from "../components/header";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Coursecard from "../components/coursecard";
const Courselist = (props) => {
  const [courses, setcourses] = useState([
    {
      key: 1,
      title: "CSE 4623 Mobile and App Development",
      instructor: "Tasnim Ahmed",
    },
    {
      key: 2,
      title: "CSE 4617 Microprocessor and Interfacing",
      instructor: "Ashraful Alam",
    },
    {
      key: 3,
      title: "Math 4633 Probability and Statistics",
      instructor: "Abdul Hakim Khan",
    },
  ]);

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
              key={item.key}
              title={item.title}
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
