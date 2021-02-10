import React, { Component,useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import firebase from 'firebase';
import {AuthContext} from "../contexts/authcontext";

function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 
   return (
    <AuthContext.Consumer>
    {(auth) => (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assets/images/Gradient_qb81cgf.png")}
        >
          <View style={styles.logoColumn}>
            <View style={styles.logo}>
              <Text style={styles.bx}>Student</Text>
              <View style={styles.bxFiller}></View>
              <View style={styles.rect7}></View>
            </View>
            <View style={styles.form}>
              <View style={styles.usernameColumn}>
                <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                    onChangeText={function(currentinput){
                      setemail(currentinput);
                    }}
                  ></TextInput>
                </View>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name="lock"
                    style={styles.icon2}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.passwordInput}
                    onChangeText={function(currentinput){
                      setpassword(currentinput);
                    }}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.usernameColumnFiller}></View>
              <TouchableOpacity
                onPress={() => {
                 // setIsLoading(true);
                  firebase
                  .auth()
                  .signInWithEmailAndPassword(email, password)
                  .then((userCreds) => {
                   alert("Login Successful");
                    auth.setisloggedin(true);
                    auth.setcurrentuser(userCreds.user)              
                  })
                  .catch((error) => {
                  //  setIsLoading(false);
                    alert(error);
                  });

                }}
                style={styles.button}
              >
                <Text style={styles.text2}>Login</Text>
              </TouchableOpacity>
              <View style={styles.usernameColumnFiller}></View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SignUp")}
                style={styles.button}
              >
              <Text style={styles.text2}>Don't Have an account?Sign Up</Text>
              </TouchableOpacity>   
            </View>
          </View>
          <View style={styles.logoColumnFiller}></View>
      
        </ImageBackground>
      </View>
    </View>
    )}
  </AuthContext.Consumer>
   );
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    alignSelf:'stretch'
    
  },
  background: {
    flex: 1,
  },
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  logo: {
    width: 402,
    height: 120,
    alignSelf:"center"
    
  },
  bx: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    marginTop: -35,
    alignSelf:"center"
  },
  bxFiller: {
    flex: 1,
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginBottom: 6,
    marginRight: 3
  },
  form: {
    height: 320,
    marginTop: 59
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoColumn: {
    marginTop: 130,
    marginLeft: 41,
    marginRight: 41,
  },
  logoColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 14,
    justifyContent: "center",
    marginBottom: 151,
    marginLeft: 41,
    marginRight: 32
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "center"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  }
});

export default Login;
