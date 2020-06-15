import React from 'react';
import { KeyboardAvoidingView, Text, Platform, Image, StyleSheet, TextInput } from 'react-native';


const NewEvent = () => {






    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
            <Image source={require('../../assets/logodna.png')} style={{ width: 250, height: 250 }} />
            <Text style={styles.textHome}>Faça seu Login</Text>
            <TextInput placeholder="Informe seu ID..."/>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    textHome: {
        fontSize: 10,
        color: '#000',
    }, 
});


export default NewEvent;