import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StatusBar as RNStatusBar, SafeAreaView, Platform, StatusBar, StyleSheet, View, Text, SafeAreaViewBase } from 'react-native';


export default function ListaAlumnos() {
    return (
        <SafeAreaView style={styles.main}>
            {/* INICIO DE APPBAR */}
            <View style={styles.appBar}>
                <Ionicons name='arrow-back' size={20} color={'#000'} />
                <Text style={styles.appBarTitle}>Lista de Usuario</Text>
                <View style={{ width: 20 }} >

                </View>


            </View>


            {/* CIERRE DE APPBAR */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#adeaf9ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        // padding: 16,
    },
    appBar: {
        height: 56,
        width: '100%',
        backgroundColor: '#fac7faff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    appBarTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});




