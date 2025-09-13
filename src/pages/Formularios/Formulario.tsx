import { Platform, StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Formulario() {
    return (
        <SafeAreaView style={styles.main}>
            <Text style={styles.title}>Registro de Alumno</Text>
            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} placeholder='Escribe tu nombre' />
            <Text style={styles.label}>Carrera</Text>
            <TextInput editable={false} style={styles.input} placeholder='Escribe tu carrea' />
            <Text style={styles.label}>Descripción</Text>
            <TextInput multiline={true} numberOfLines={4} style={[styles.input, styles.textarea]} placeholder='Describe personalidad' />
            <Text style={styles.label}>Correo Electronico</Text>
            <TextInput style={styles.input} placeholder='Escribe tu correo electronico' keyboardType='email-address' />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input} placeholder='**********' secureTextEntry />
            <Text style={styles.label}>Telefono</Text>
            <TextInput style={styles.input} placeholder='123456' keyboardType='phone-pad' />
            {/* //ya sea numeric o phone-pad */}
            <TouchableOpacity style={styles.botonConIcono}>
                <Ionicons name="send" size={20} color="white" style={styles.iconoIzquierda} />
                <Text style={styles.textoBoton}>Boton Grande</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#ffffffff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
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
    botonConIcono: {
        backgroundColor: '#0044ffff',
        marginTop: 15,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 40,
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