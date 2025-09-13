import { Platform, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';


export default function Formulario() {
  return (
      <SafeAreaView style={styles.main}>
        <Text>Nombre</Text>
        <TextInput placeholder='Escribe tu nombre'/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f4f4f4ff',
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
  

});