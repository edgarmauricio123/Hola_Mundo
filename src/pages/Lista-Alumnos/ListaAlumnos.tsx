import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StatusBar as RNStatusBar, SafeAreaView, Platform, StatusBar, StyleSheet, View, Text, SafeAreaViewBase, ScrollView, Image } from 'react-native';


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


            {/* Inicio de contenido(Lista de alumnos) */}
            <ScrollView style={styles.scrollcont}>
                <Text style={styles.sectionTitle}>Lista Alumnos</Text>
                <View style={styles.card}>
                    <Image style={styles.avatar} source={{ uri: 'https://imgs.search.brave.com/P0iwyPn688FcKp4RYILwKziBsn3t9mliMzdz_NeZsko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/bmRyb2d5bm91cy1h/dmF0YXItbm9uLWJp/bmFyeS1xdWVlci1w/ZXJzb25fMjMtMjE1/MTEwMDIyNi5qcGc_/c2VtdD1haXNfaW5j/b21pbmcmdz03NDAm/cT04MA' }} />
                    <View style={styles.cardInfo}>
                        <Text style={styles.UserName}>Edgar Mauricio</Text>
                        <Text style={styles.UserDetails}>Ing. Sistemas Computacionales</Text>



                    </View>
                </View>
            </ScrollView>


            {/* Cierre de contenido */}
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
    scrollcont: {

    },
    sectionTitle: {

    },
    card: {

    },
    cardInfo: {

    },
    UserName: {

    },
    UserDetails: {


    },
    avatar: {

    },

});




