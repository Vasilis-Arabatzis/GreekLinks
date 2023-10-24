import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from 'react';


export default function Login (){

    const [text, onChangeText] = useState('Username');
    const [number, onChangeNumber] = useState('');


    <SafeAreaView>

        <TextInput
            
            onChangeText={onChangeText}
            value={text}
        />
        <TextInput
            onChangeText={onChangeNumber}
            value={text}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />    
    </SafeAreaView>
}