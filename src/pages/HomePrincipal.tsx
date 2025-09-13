import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollViewBase, ScrollView } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import CardBasico from '../componets/CardBasico';
import CardImg from '../componets/CardImg';
import CardV2 from '../componets/CardV2';
import CardV3 from '../componets/CardV3';

export default function HomePrincipal() {
  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.title}> Pagina principal </Text>
        <CardBasico />
        <CardImg />
        <CardV2 />
        <CardV3 />
        <ExpoStatusBar style="auto" />
      </View>
    </ScrollView>
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

});