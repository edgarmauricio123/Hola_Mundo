import { Ionicons } from '@expo/vector-icons'; import React from 'react';
import {  StatusBar as RNStatusBar,SafeAreaView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';


export default function ListaAlumnos(){
    return (
        <View style={styles.main}>
            <Text>ListaAlumnos</Text>
 <StatusBar />
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#adeaf9ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 36,
    },
});

