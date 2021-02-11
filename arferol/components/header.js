import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {AuthContext}  from "../contexts/authcontext";

function Header(props) {
  return (
    <AuthContext.Consumer>
    {(auth) => (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButtonRow}>
        <TouchableOpacity style={styles.leftIconButton} >
          <MaterialCommunityIconsIcon
            name="menu"
            style={styles.leftIcon}
            onPress={()=>{
            props.toggledrawer();
            }}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </View>
      <View style={styles.leftIconButtonRowFiller}></View>
      <TouchableOpacity style={styles.rightIconButton}
            onPress={()=>{
              auth.setcurrentuser({});
              auth.setisloggedin(false);
            }}
      >
        <MaterialCommunityIconsIcon
          name="lock-open"
          style={styles.rightIcon}
          
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  )}
   </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    marginLeft: 21,
    marginTop: 14
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "transparent",
    lineHeight: 18
  },
  leftIconButtonRow: {
    height: 48,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 5
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 11,
    alignItems: "center",
    marginRight: 5,
    marginTop: 5
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});

export default Header;
