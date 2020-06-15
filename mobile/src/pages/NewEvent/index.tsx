import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Platform, Image, StyleSheet, TextInput, ScrollView, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const NewEvent = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [cep, setCEP] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [date, setDate] = useState('');
    const [horario, setHorario] = useState('');

    const data = {
        name,
        description,
        cep,
        rua,
        numero,
        bairro,
        date,
        horario,
    };

    async function handleRegisterNewEvent() {
        try {
            await api.post(`/ministries/${await AsyncStorage.getItem('id')}/events`, data);
            alert('Evento Agendado!');
            navigation.navigate('Home');
        } catch (error) {
            alert('Não Foi Possível Criar Evento!');
        }
    }


    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
            <ScrollView>
                <Image source={require('../../assets/logodna.png')} style={{ width: 300, height: 300 }} />
                <Text style={styles.textHome}>Crie seu Evento</Text>
                <TextInput value={name} onChangeText={setName} style={styles.inputs} placeholder="Nome..." />
                <TextInput value={description} onChangeText={setDescription} style={styles.inputs} placeholder="Descrição..." />
                <TextInput value={cep} onChangeText={setCEP} style={styles.inputs} placeholder="CEP..." />
                <TextInput value={rua} onChangeText={setRua} style={styles.inputs} placeholder="RUA..." />
                <TextInput value={numero} onChangeText={setNumero} style={styles.inputs} placeholder="Número..." />
                <TextInput value={bairro} onChangeText={setBairro} style={styles.inputs} placeholder="Bairro..." />
                <TextInput value={date} onChangeText={setDate} style={styles.inputs} placeholder="Data..." />
                <TextInput value={horario} onChangeText={setHorario} style={styles.inputs} placeholder="Horário..." />
                <RectButton style={styles.button} onPress={handleRegisterNewEvent}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton>
                <Link to="/Home" style={styles.link}>
                    <AntDesign name="arrowleft" color="red" size={20} />
                    <Text>Voltar</Text>
                </Link>
            </ScrollView>
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
        marginLeft: 70,
        fontSize: 30,
        color: '#000',
        fontFamily: 'IndieFlower_400Regular',
    },

    inputs: {
        marginLeft: 50,
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
        marginLeft: 50,
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
        marginBottom: 20,
    },

    footer: {
        marginBottom: 120,
    }
});


export default NewEvent;