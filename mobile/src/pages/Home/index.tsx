import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, Platform, Image, StyleSheet, View, ScrollView, AsyncStorage, FlatList, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [members, setMembers] = useState([]);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);


    async function handleregisterNewMember() {
        navigation.navigate('NewMember');
    }

    async function handleregisterNewEvent() {
        navigation.navigate('NewEvent');
    }

    async function handleLogout() {
        await AsyncStorage.clear();
        navigation.goBack();
    }

    function navigateToDetail(member: Object) {
        navigation.navigate('Detail', { member })
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../../assets/logodna.png')} style={{ width: 300, height: 300 }} />
                <View style={{ alignItems: 'center', marginBottom: 40 }}>
                    <RectButton onPress={handleLogout}>
                        <AntDesign name="poweroff" color="#000" size={40} />
                    </RectButton>
                </View>
                <Text style={styles.textHome}>Home</Text>
                
                <View style={styles.sections}>
                    <Text style={styles.sectiontext}>Membros</Text>
                    <RectButton style={styles.button} onPress={handleregisterNewMember}>
                        <View style={styles.buttonIcon}>
                            <AntDesign name="adduser" color="#fff" size={30} />
                        </View>
                        <Text style={styles.buttonText}>Novo Membro</Text>
                    </RectButton>
                </View>
                
                <View style={styles.sections}>
                    <Text style={styles.sectiontext}>Eventos</Text>
                    <RectButton style={styles.button} onPress={handleregisterNewEvent}>
                        <View style={styles.buttonIcon}>
                            <AntDesign name="bells" color="#fff" size={30} />
                        </View>
                        <Text style={styles.buttonText}>Novo Evento</Text>
                    </RectButton>
                </View>
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
        fontSize: 40,
        color: '#000',
        fontFamily: 'IndieFlower_400Regular',
        textAlign: 'center',
    },

    button: {
        backgroundColor: 'red',
        height: 60,
        width: 150,
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

    sections: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 40
    },

    sectiontext: {
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
        paddingTop: 45
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, .1)',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    },
});


export default Home;