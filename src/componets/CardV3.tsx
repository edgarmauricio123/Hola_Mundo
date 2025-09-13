import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';

export default function CardV3() {
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={{ uri: 'https://content.nationalgeographic.com.es/medio/2021/11/29/fotografo-de-paisajes-naturales-del-ano-ganador-absoluto_5cbce102_800x533.jpg' }} />
            <View style={styles.card_contenido}>
                <Text style={styles.titulo}>card con imagen</Text>
                <Text style={styles.contenido}>Contenido del card</Text>
                <TouchableOpacity style={styles.botonSombreado}>
                    <Text style={styles.texto}>Boton Sombreado</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        // padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 3,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 3 },
    },
    card_contenido: {
        padding: 16,
        backgroundColor: '#ffffffff',
    },
    titulo: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    contenido: {
        // marginTop: 4,
        // textAlign: 'center',
        marginBottom: 12,
        fontSize: 12,
        color: '#333',
    },
    img: {
        width: '100%',
        height: 180,
        // borderRadius:10,
    },
    botonSombreado: {
        marginTop: 10,
        backgroundColor: '#f08787ff',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 30,
        alignSelf: 'flex-start',
        // marginBottom:10,
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 12,
    },

});
