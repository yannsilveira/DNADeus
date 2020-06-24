import React, { useState, Component } from 'react';
import { KeyboardAvoidingView, Text, Platform, Image, StyleSheet, TextInput, ScrollView, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RectButton, State } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const NewEvent = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [date, setDate] = useState('');
    const [schedule, setSchedule] = useState('');

    const data = {
        name,
        description,
        zipcode,
        street,
        number,
        neighborhood,
        date,
        schedule,
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
                <TextInput value={zipcode} onChangeText={setZipcode} style={styles.inputs} placeholder="CEP..." />
                <TextInput value={street} onChangeText={setStreet} style={styles.inputs} placeholder="RUA..." />
                <TextInput value={number} onChangeText={setNumber} style={styles.inputs} placeholder="Número..." />
                <TextInput value={neighborhood} onChangeText={setNeighborhood} style={styles.inputs} placeholder="Bairro..." />
                <TextInput value={date} onChangeText={setDate} style={styles.inputs} maxLength={10} placeholder="Data..." />
                <TextInput value={schedule} onChangeText={setSchedule} style={styles.inputs} maxLength={5} placeholder="Horario..." />
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
        marginTop: 20,
        fontSize: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingLeft: 10,
        width: 300,
        height: 30,
        paddingBottom: 10
    },

    datainputs: {
        marginTop: 20,
        width: 300,
        height: 30,
        paddingBottom: 200,
    },

    textdatainputs: {
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
        marginTop: 30
    },

    button: {
        backgroundColor: 'red',
        height: 60,
        width: 300,
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