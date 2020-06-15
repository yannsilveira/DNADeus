import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Platform, Image, StyleSheet, TextInput, View, AsyncStorage } from 'react-native';
import { useNavigation, Link } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import { AntDesign } from '@expo/vector-icons';


const NewMember = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');

    const data = {
        name,
        age,
        email,
        whatsapp,
    };

    async function handleregisterNewMember() {
        try {
            await api.post(`/ministries/${await AsyncStorage.getItem('id')}/users`, data);
            alert('Membro Cadastrado com Sucesso!');
            navigation.navigate('Home');
        } catch (error) {
            alert('Não foi possível cadastrar membro!');
        }
    }


    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
            <View>
                <Image source={require('../../assets/logodna.png')} style={{ width: 300, height: 300 }} />
            </View>
            <Text style={styles.textHome}>Faça seu Cadastro</Text>
            <View style={styles.footer}>
                <TextInput style={styles.inputs} value={name} onChangeText={setName} placeholder="Informe seu Nome..." />
                <TextInput style={styles.inputs} value={age} onChangeText={setAge} placeholder="Informe sua Idade..." />
                <TextInput style={styles.inputs} value={email} onChangeText={setEmail} placeholder="Informe seu E-mail..." />
                <TextInput style={styles.inputs} value={whatsapp} onChangeText={setWhatsApp} placeholder="Informe seu WhatsApp..." />
                <RectButton style={styles.button} onPress={handleregisterNewMember}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton>
                <Link to="/Home" style={styles.link}>
                    <AntDesign name="arrowleft" color="red" size={20} />
                    <Text>Voltar</Text>
                </Link>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textHome: {
        fontSize: 30,
        color: '#000',
        fontFamily: 'IndieFlower_400Regular',
    },

    inputs: {
        marginTop: 20,
        fontSize: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingLeft: 10,
        width: 200,
        height: 30,
        paddingBottom: 10
    },

    button: {
        backgroundColor: 'red',
        height: 60,
        width: 200,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 20,
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: '800'
    },

    link: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        textDecorationLine: 'underline',
    },

    footer: {
        marginBottom: 120,
    }
});


export default NewMember;