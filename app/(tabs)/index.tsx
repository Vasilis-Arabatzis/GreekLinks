import {ScrollView, StyleSheet,Image, TouchableOpacity ,Text, Dimensions} from 'react-native';


import { View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '@rneui/base';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import { useState } from 'react';

import { data } from '../dbtrial';




export default function TabOneScreen() {

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width /1.2);
  const imageWidth = dimensions.width;

  const [searchValue, setSearchValue] = useState("");
  const [heart,setHeart] = useState<'heart'|'heart-o'>('heart-o');
  const [colorIcon,setColorIcon] = useState<'black'| 'red'>('black');
  const [like,setLike] = useState<0|1>(0);
  const [platformOs,setPlatformOs] = useState<'ios'| 'android'>('android');
  
  
  //Εδω θα βάλω if για τα likes  με τα icons να αλλάζουν

  const liked=() =>{  
    if (like === 0){
      setLike(1)
      setHeart('heart')
      setColorIcon('red')
      
    }
    else{
      setLike(0);
      setHeart('heart-o')
      setColorIcon('black')
     
    } 
   
  }
  

  
   



  
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: '30%',
      padding: '5%',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      paddingBottom:'auto',
      marginBottom: '2%',
    },
    textTitlle:{
      fontSize: 30,
    },
    summary: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width:'100%',
      marginTop:20,
      marginBottom: 20,
      padding: '5%',
      shadowColor: "black",
      shadowOpacity: 0.6,
      shadowOffset: { width: 0, height: 4 },
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
    post: {
      height: 'auto',
      width:imageWidth,
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 20,
      padding: 22,
      shadowColor: "black",
      shadowOpacity: 0.6,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 10,
      borderRadius: 10,
      backgroundColor: "white",
    },
    profileN: {
      flexDirection: "row",
      width:'100%',
      marginBottom: 20,
      paddingBottom: '5%',
     
    },
    textD:{
      marginLeft: "1%",
      fontWeight: "bold",
      fontSize: 25,

    },
    profileImg: {
      height: 40,
      width: 40,
      borderRadius: 30,
    },
    IMG:{
      resizeMode:"cover",
      borderRadius: 10,
      width:"100%",
      height: imageHeight,

    },
    
    
  })

 

  return (
    <SafeAreaView style={{flex: 1, flexGrow:1 ,backgroundColor: "#FFFFFF"}} >
      <ScrollView contentContainerStyle={styles.contentContainer}  >    
            {data.items.map((item) => ( // Τραβάει όλα τα στοιχεία που έχει η const state και τα εμφανιζει ένα ένα με την σείρα όσα έχει
              <View key={item.id}  style={styles.post}>
                <View style= {styles.profileN}>
                 <TouchableOpacity style={{flexDirection:"row"}} onPress={() => {}}>
                    <Image source={{uri: item.imgProfile}}  style= {styles.profileImg}/> 
                    <Text style={styles.textD} >{item.pName}</Text>
                  </TouchableOpacity>
                </View>
               
              
               <Image source={{uri: item.uri}}  style= {styles.IMG}/>       
                {/*  Να κοιταξώ να παίρνει διάφορα μεγέθη στην φωτογραφία */}     
                <View style={styles.summary}>
                <TouchableOpacity onPress={() => liked()}>
                    <FontAwesome name={heart} size={26} color= {colorIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Fontisto name="comment" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                   <FontAwesome name="send" size={24} color="black" />
                </TouchableOpacity>
               </View>
              </View>
            
          ))}
          </ScrollView>
    </SafeAreaView>  
  );
}

