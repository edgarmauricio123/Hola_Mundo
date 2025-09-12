import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function Butones() {
  return (
    <View style={styles.main}>
     
<Text style={styles.h1}>Botones</Text>
{/* Boton 1 */}
    <TouchableOpacity style={styles.botonBasico}>
        <Text style={styles.text}>Boton 1</Text>
    </TouchableOpacity>
    {/* Boton 2 */}
    <TouchableOpacity style={styles.botonIcono}>
        <Ionicons name="person" size={20} color="blue" />

        <Text style={styles.text}>Boton Icono</Text>
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
 h1:{
    fontSize: 25,
    fontWeight: 'bold',
 },
 botonBasico:{
    backgroundColor: '#ffffffff',
    padding:12,
    borderRadius:50,
    marginTop:10,
    // marginbutton:10,
},
text:{
color:'#000000',
textAlign:'center',
fontWeight:'bold',
},
botonIcono:{
    backgroundColor: '#ffffffff',
    fontSize:30,
    padding:12,
    borderRadius:120,
    marginTop:10,
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
},


});