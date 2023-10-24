import React, { useState} from 'react';
import { Text, Image, TouchableHighlight, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function ImagePickerExample(this: any) {
  const [image, setImage] = useState<any | null>(null);

  const [count, setCount] = useState(0);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      
      console.log(result.assets[0].uri)

      setImage(result.assets[0].uri);
     
    }
    
  };


  const styles = StyleSheet.create({
    profileImgContainer: {
      marginLeft: 8,
      height: 100,
      width: 100,
      borderRadius: 100,
    },
    profileImg: {
      height: 100,
      width: 100,
      borderRadius: 100,
    },
  })

  return (
    <SafeAreaView style={{ flex: 1,  justifyContent: 'flex-start'}}>
      <View style= {{ flexDirection: "row"}}>
      
       <TouchableHighlight onPress={() => pickImage()}
          style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}
        >
          <Image source={{uri: image }} style={styles.profileImg} />
      </TouchableHighlight>
        <View style= {{marginLeft: "10%",marginTop: "3%"}}> 
          
        <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Text >Followers</Text>
        </TouchableOpacity>
         <Text style={{marginLeft:"25%",marginTop: "10%"}}>{count}</Text>
        </View>
     
      </View>    
    </SafeAreaView>
  );


 
  
}
