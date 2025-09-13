import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, Platform, StatusBar, StyleSheet, Text, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default function FormularioV2() {
    return (
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <Text style={styles.title}>Formulario V2</Text>
                <View style={styles.container}>
                    <Image style={styles.avatar} source={{ uri: 'https://imgs.search.brave.com/P0iwyPn688FcKp4RYILwKziBsn3t9mliMzdz_NeZsko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/bmRyb2d5bm91cy1h/dmF0YXItbm9uLWJp/bmFyeS1xdWVlci1w/ZXJzb25fMjMtMjE1/MTEwMDIyNi5qcGc_/c2VtdD1haXNfaW5j/b21pbmcmdz03NDAm/cT04MA' }} />
                    <Text style={styles.name}>Edgar Mauricio</Text>
                    <View style={styles.infocontainer}>
                          <Text style={styles.label}>Carrera</Text>
                        <Text style={styles.info}>Sistemas Computacionales</Text>
                          <Text style={styles.label}>Especialdad</Text>
                        <Text style={styles.info}>Desarrollo de software</Text>
                        <Text style={styles.label}>Correo</Text>
                        <Text style={styles.info}>Edgar@Mauricio.com</Text>
                        <Text style={styles.label}>Telefono</Text>
                        <Text style={styles.info}>123456789</Text>
                        <Text style={styles.label}>Numero de control</Text>
                        <Text style={styles.info}>123456789</Text>
                    </View>
                    <TouchableOpacity style={styles.botonConIcono}>
                        <Ionicons name="save" size={20} color="white" style={styles.iconoIzquierda} />
                        <Text style={styles.textoBoton}>Boton Grande</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#cfcfcfff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    },
    title: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    container: {
        width: '100%',
        backgroundColor: '#ffffffff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    avatar: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        margin: 20,
        borderWidth: 2,
        borderBlockColor: '#000000ff',
    },
    name: {
        color: '#ffffffff',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: '#f14747ff',
        padding: 5,
        width: '55%',
        textAlign: 'center',
     

    },
    infocontainer: {
        width: '100%',
        marginBottom: 15,

    },
    label: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 10,
    },
    info: {
        fontSize: 13,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#f4f4f4ff',
        padding: 10,

    },
    botonConIcono: {
        backgroundColor: '#0044ffff',
        marginTop: 15,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 40,
        width: '80%',
    },
    iconoIzquierda: {
        marginRight: 20
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});