
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground, 
} from "react-native";

import { loginP } from './../app/dbtrial';
import { Link } from "expo-router";


export default function modalScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      resizeMode: "cover",
      height: 300,
      width: 330,
      marginBottom: "4%"
    },
    inputView: {
      backgroundColor: "#43275f",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: "#f5beac",
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color:"#2c0d4b",
    },
    loginBtn: {
      width: "65%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10,
      backgroundColor: "#43275f",
    },
  });

 const element = loginP.users.map((user) =>(user.mail));
 const element2 = loginP.users.map((user) =>(user.Upassword));
 const checkLogin=() =>{
   for (let i= 0; i < loginP.users.length; i++) {
     if( email === element[i] && password === element2[i]){
       console.log("Welcome to GreekLinks")
     }else{
      console.log("Sorry ")
     }

    
   }
 }

 const forgotPassword=() =>{
 
 }

  return (
    <View style={styles.container}>
      <Image 
       source={require('./../assets/images/GreekLinks.png')}
       style= {styles.image}
      />     
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#f5beac"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#f5beac"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity  onPress={() => checkLogin()} style={styles.loginBtn}>
        <Text style= {{color:"#f5beac"}}>LOGIN</Text> 
      </TouchableOpacity> 
      <Link href={{pathname:'/Register'}}>
        <Text style={styles.forgot_button}>Register</Text> 
       </Link>
    </View> 
  );
}
