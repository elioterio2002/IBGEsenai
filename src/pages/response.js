import React, {useState, useEffect} from 'react';
import {View, Text, AsyncStorage, Image} from 'react-native';
import Styles from './styles';
import Logo from '../assets/logo.png';

export default function Response(){
    const [description,setDescription] = useState(''); 
    useEffect(()=> {
        async function getDescription(){
            setDescription(await AsyncStorage.getItem('description'));
        }
        getDescription();
    }, []);

    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Image source={Logo} />
            </View>
            <Text style={Styles.text}>{description}</Text>
        </View>
    );
}