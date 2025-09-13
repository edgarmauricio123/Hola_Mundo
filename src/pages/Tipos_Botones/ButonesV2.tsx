import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function ButonesV2() {
  return (
    <View style={styles.main}>
     
    <Text style={styles.title}> Botones Personalizados</Text>
    {/* Boton grande */}
    <TouchableOpacity style={styles.botonGrande}>
<Text style={styles.textoBoton}>Boton Grande</Text>

    </TouchableOpacity>
    {/* Boton grande con icono */}
        <TouchableOpacity style={styles.botonConIcono}>
        <Ionicons name="send" size={20} color="white" style={styles.iconoIzquierda} />
        <Text style={styles.textoBoton}>Boton Grande</Text>
        </TouchableOpacity>
        {/* Boton Sombreado */}
        <TouchableOpacity style={[styles.botonSombreado, styles.sommbra]}>
        <Text style={styles.textoBoton}>Boton Sombreado</Text>
        </TouchableOpacity>
      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ebe8a1ff',       
   padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
title: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 20,
textAlign: 'center',
},
botonGrande: {
  backgroundColor:'white',
  padding:10,
  borderRadius:80,
  marginTop:10,
  alignSelf:'center',
},
textoBoton: {
  color: 'black',      
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 16, 
},
botonConIcono: {
    backgroundColor: '#4c76e8ff',
    marginTop:10,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    paddingVertical:12,
    borderRadius:15,
},
iconoIzquierda: {
    marginRight:10
},
botonSombreado: {
    marginTop:10,
    backgroundColor: '#f08787ff',
    paddingVertical:14,
    borderRadius:30,
    marginBottom:10,
},
sommbra: {

    ...Platform.select({
        android:{
            elevation: 80,
        },
        ios: {
            shadowColor: '#000000ff',    
            shadowOffset: { width: 0, height: 5 },
            ShadowOpacity:0.8,
            shadowradius: 2,
        },  
    }),
},
        
});