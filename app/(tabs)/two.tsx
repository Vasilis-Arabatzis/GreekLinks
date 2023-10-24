import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from '@rneui/themed';
import { Button, Platform, ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function TabTwoScreen() {
  const styles = StyleSheet.create({
    container: {
      padding: '5%',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      
      marginBottom: 5,
    },
    textTitlle:{
      fontSize: 30,
    },
    summary: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      padding: 22,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      borderRadius: 10,
      backgroundColor: "white",
    },
    summaryText: {
      fontFamily: "normal",
      fontSize: 18,
    },
    amount: {
      color: "#C2185B",
    },
    contentContainer: {
      paddingBottom: 100,
    },
    
    
  })

  const state = {
    // Απλα δεδομένα για δοκιμη στο scrollview
    items: [
      { Name: "aaa", Surname: "10", id: 1 },
      { Name: "asa", Surname: "20", id: 2 },
      { Name: "erw", Surname: "30", id: 3 },
      { Name: "eewf4", Surname: "40", id: 4 },
      { Name: "eorp", Surname: "50", id: 5 },
      { Name: "gverpgnmj", Surname: "60", id: 6 },
      { Name: "gerr", Surname: "70", id: 7 },
      { Name: "rgege", Surname: "80", id: 8 },
      { Name: "grerg", Surname: "90", id: 9 },
      { Name: "grerg", Surname: "100", id: 10 },
      { Name: "egergger", Surname: "110", id: 11 },
      { Name: "grreg", Surname: "120", id: 12 },
      { Name: "grergge", Surname: "130", id: 13 },
      { Name: "ergergr", Surname: "140", id: 14 },
      { Name: "gergerg", Surname: "150", id: 15 },
      { Name: "gerrg", Surname: "150", id: 16 },
      { Name: "Il-gl17", Surname: "150", id: 17 },
    ],
  };
  

  function onClick(): any{

    console.log("nice")

  }
  

  return (
    
    <SafeAreaView style={{flexGrow: 1}} >            

          <ScrollView contentContainerStyle={styles.contentContainer}  >
            
            {state.items.map((item) => ( // Τραβάει όλα τα στοιχεία που έχει η const state και τα εμφανιζει ένα ένα με την σείρα όσα έχει
              <View key={item.id} style={{paddingTop: '1%'}}>
                <View style={styles.summary}>
                  <Text style={styles.summaryText}>
                    {item.Name} <Text style={styles.amount}>
                       {item.Surname}€</Text>
                  </Text>
                  <Button title="Order" color="#FFC107" 
                        onPress={() => {}} />
                </View>
              </View>
          ))}
            <View>

                <Button title="click me" color = "#FFC107" onPress={() => onClick()}></Button>

            </View>
          </ScrollView>
            
        
       
       

   

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
     
    </SafeAreaView>
    
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
},
separator: {
  marginVertical: 30,
  height: 1,
  width: '80%',
},
});

