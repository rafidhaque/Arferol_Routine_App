import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../components/header";
import Assignmentdetail from "../components/assignmentdetail";

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
              key={item.key}
              title={item.title}
              instructor={item.instructor}
              description={item.description}
              status={item.status}
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
