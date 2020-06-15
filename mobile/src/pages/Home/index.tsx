import React from 'react';
import { KeyboardAvoidingView, Text, Platform, Image, StyleSheet, View, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();


    async function handleregisterNewMember() {
        navigation.navigate('NewMember');
    }

    async function handleregisterNewEvent() {
        navigation.navigate('NewEvent');
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
            <Image source={require('../../assets/logodna.png')} style={{ width: 300, height: 300 }} />
            <Text style={styles.textHome}>Home</Text>            
            <RectButton style={styles.button} onPress={handleregisterNewMember}>
                <View style={styles.buttonIcon}>
                    <AntDesign name="adduser" color="#000" size={30} />
                </View>
                <Text style={styles.buttonText}>Novo Membro</Text>
            </RectButton>
            <RectButton style={styles.button} onPress={handleregisterNewEvent}>
                <View style={styles.buttonIcon}>
                    <AntDesign name="bells" color="#000" size={30} />
                </View>
                <Text style={styles.buttonText}>Novo Evento</Text>
            </RectButton>
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

    button: {
        backgroundColor: 'red',
        height: 60,
        width: 200,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 10,
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
});


export default Home;