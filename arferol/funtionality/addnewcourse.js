import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Header from "../components/header";
import firebase from "firebase";
import { AuthContext } from "../contexts/authcontext";

const Addnewcourse = (props) => {
  const [coursetitle, setcoursetitle] = useState("");
  const [instructor, setinstructor] = useState("");
  const [credit, setcredit] = useState(0);

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.viewstyle}>
          <Header
            toggledrawer={() => {
              props.navigation.toggleDrawer();
            }}
            title="Add Assignment"
          ></Header>
          <Text style={styles.textstyle}>Add:</Text>
          <View style={styles.viewstyle}>
            <TextInput
              style={{ height: 40, borderColor: "dodgerblue", borderWidth: 2 }}
              onChangeText={function (currentvalue) {
                setcoursetitle(currentvalue);
              }}
              placeholder="Enter Course Name"
            />
          </View>
          <View style={styles.viewstyle}>
            <TextInput
              style={{ height: 40, borderColor: "dodgerblue", borderWidth: 2 }}
              onChangeText={function (currentvalue) {
                setinstructor(currentvalue);
              }}
              placeholder="Enter Instuctor Name"
            />
          </View>
          <View style={styles.viewstyle}>
            <TextInput
              style={{ height: 40, borderColor: "dodgerblue", borderWidth: 2 }}
              onChangeText={function (currentvalue) {
                setcredit(currentvalue);
              }}
              placeholder="Enter Credit"
            />
          </View>

          <View style={styles.viewstyle}>
            <Button
              title="Confirm"
              onPress={() => {
                firebase
                  .firestore()
                  .collection("users")
                  .doc(auth.currentuser.email)
                  .collection("courses")
                  .doc(coursetitle)
                  .set({
                    coursetitle: coursetitle,
                    instructor: instructor,
                    credit: credit,
                  });
              }}
            ></Button>
          </View>
        </View>
      )}
    </AuthContext.Consumer>
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
  viewstyle: {
    padding: 10,
  },
});

export default Addnewcourse;
