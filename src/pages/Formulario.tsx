import { Platform, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';


export default function Formulario() {
    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} placeholder='Escribe tu nombre' />
            <Text style={styles.label}>Descripción</Text>
            <TextInput multiline={true} numberOfLines={4} style={[styles.input, styles.textarea]} placeholder='Describe personalidad' />
            <Text style={styles.label}>Correo Electronico</Text>
            <TextInput style={styles.input} placeholder='Escribe tu correo electronico' keyboardType='email-address' />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input} placeholder='**********' secureTextEntry />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#f4f4f4ff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    },
    label: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,

    },
    input: {
        borderWidth: 1,
        borderColor: '#000000ff',
        borderRadius: 10,
        backgroundColor: '#fff',

    },
    textarea: {
        height: 100,
        textAlignVertical: 'top',

    },

});