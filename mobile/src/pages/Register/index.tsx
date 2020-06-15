import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Platform, Image, StyleSheet, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Link, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';


const Register = () => {
    const [name, setName] = useState('');
    const navigation = useNavigation();

    async function handleRegisterMinistry() {
        try {
            const response = await api.post('ministries', { name });
            alert(`Seu ID de acesso é ${response.data.id}`);
            navigation.navigate('Logon');
        } catch (error) {
            alert('Não foi possível cadastrar Ministério, Tente Novamente!');
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
            <View>
                <Image source={require('../../assets/logodna.png')} style={{ width: 300, height: 300 }} />
            </View>
            <View>
                <Text style={styles.textHome}>Faça seu Cadastro</Text>
            </View>
            <TextInput style={styles.inputs} placeholder="Nome do Ministério..." value={name} onChangeText={setName} />
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleRegisterMinistry}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton>
                <View>
                    <Link to="/Logon" style={styles.link}>
                        <AntDesign name="arrowleft" color="red" size={20} />
                        <Text>Não possuo cadastro</Text>
                    </Link>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textHome: {
        fontSize: 30,
        color: '#000',
        fontFamily: 'IndieFlower_400Regular',
    },

    inputs: {
        marginTop: 30,
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


export default Register;