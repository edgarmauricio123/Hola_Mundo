import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function CardBasico() {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>Titulo del card</Text>
            <Text style={styles.contenido}>Contenido del card</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 3,
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    titulo: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    contenido: {
        marginTop:4,
        textAlign: 'center',
    },
});
