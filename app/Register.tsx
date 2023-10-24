
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { loginP } from './../app/dbtrial';


export default function modalScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      
    },
    image: {
      resizeMode: "contain",
      height: 300,
      width: 300,
      marginBottom: "4%"
    },
    inputView: {
      backgroundColor: "#43275f",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 10,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: "#f5beac",
    },
    RegisterBtn: {
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#f5beac"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#f5beac"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Surname"
          placeholderTextColor="#f5beac"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone"
          placeholderTextColor="#f5beac"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>
      <TouchableOpacity  onPress={() => checkLogin()} style={styles.RegisterBtn}>
        <Text style= {{color:"#f5beac"}}>LOGIN</Text> 
      </TouchableOpacity> 
      
    </View> 
  );
}
