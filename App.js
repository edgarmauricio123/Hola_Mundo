import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.holamundo}>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebe8a1ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holamundo: {
    fontSize: 58,
    color: '#000000',
    borderRadius:80,
    backgroundColor:'#efefefff',
    padding:20,
    
  },
});
