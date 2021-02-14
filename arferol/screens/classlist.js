import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import Header from "../components/header";
import Classdetail from "../components/classdetail";
const Classlist = (props) => {
  console.log(props.navigation);
  console.log("Here in Classlist");
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
              key={item.key}
              title={item.title}
              instructor={item.instructor}
              time={item.time}
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

export default Classlist;
