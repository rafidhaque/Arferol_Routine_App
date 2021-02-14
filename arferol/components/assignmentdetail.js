import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Assignmentdetail = (props) => {
  console.log(props);
  return (
    <View style={styles.cardstyle}>
      <View style={styles.detailstyle}>
        <Text style={styles.textstyle}>Course Name:{props.title}</Text>
        <Text style={styles.textstyle}>Description:{props.description}</Text>
        <Text style={styles.textstyle}>Status:{props.status}</Text>
        <Text style={styles.textstyle}>Time remaining: {props.time}</Text>
        <View style={styles.buttongroupstyle}>
          <Text style={styles.buttonstyle}>
            {" "}
            <Button title="Mark as Completed"> </Button>{" "}
          </Text>
        </View>
      </View>
    </View>
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
    left: 0,
  },
});

export default Assignmentdetail;
