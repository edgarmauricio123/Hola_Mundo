import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function CardImg() {
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={{uri:'https://content.nationalgeographic.com.es/medio/2021/11/29/fotografo-de-paisajes-naturales-del-ano-ganador-absoluto_5cbce102_800x533.jpg'}}/>
            <Text style={styles.titulo}>card con imagen</Text>
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
    img:{
        width:'100%',
        height:150,
        borderRadius:10,
    },
});
