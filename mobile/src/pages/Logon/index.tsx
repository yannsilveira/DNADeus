import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Platform, Image, StyleSheet, View, TextInput, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useNavigation, Link } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Logon = () => {
    const [id, setId] = useState('');
    const navigation = useNavigation();

    async function handleNavigationToHome() {
        try {
            const response = await api.post('sessions', { id });
            await AsyncStorage.setItem('id', id);
            await AsyncStorage.setItem('name', response.data.name);
            navigation.navigate('Home');
        } catch (error) {
            alert('Não foi Possível realizar o Login!');
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'position' : undefined}>
            <Image source={require('../../assets/logodna.png')} style={{ width: 300, height: 300 }} />
            <Text style={styles.textHome}>Faça seu Login</Text>
            <TextInput style={styles.inputs} onChangeText={setId} value={id} keyboardType="name-phone-pad" placeholder="Informe seu ID..." />
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleNavigationToHome}>
                    <View style={styles.buttonIcon}>
                        <AntDesign name="login" style={{ color: '#fff' }} size={20} />
                    </View>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </RectButton>
                <Link to="/Register" style={styles.link}>
                    <Text>Não possuo cadastro</Text>
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
        textAlign: 'center',
        fontFamily: 'IndieFlower_400Regular',
    },

    inputs: {
        marginTop: 60,
        fontSize: 20,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingLeft: 10,
        width: 300,
        height: 30,
        paddingBottom: 10
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

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
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


export default Logon;