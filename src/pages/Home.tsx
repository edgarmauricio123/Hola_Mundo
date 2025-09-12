import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.holamundo}>Hola Mundo</Text> */}
      <Image style={{ width: 200, height: 200, borderRadius: 100 }}source={{uri: 'https://imgs.search.brave.com/P0iwyPn688FcKp4RYILwKziBsn3t9mliMzdz_NeZsko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/bmRyb2d5bm91cy1h/dmF0YXItbm9uLWJp/bmFyeS1xdWVlci1w/ZXJzb25fMjMtMjE1/MTEwMDIyNi5qcGc_/c2VtdD1haXNfaW5j/b21pbmcmdz03NDAm/cT04MA'}}/>
      <Text style={styles.h1}> Bienvenidos </Text>
      <Text style={styles.h2}>A la clase de  </Text>
      <Text style={styles.h3}>Desarrollo de Aplicaciones Moviles</Text>




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
  // holamundo: {
  //   fontSize: 58,
  //   color: '#000000',
  //   borderRadius:80,
  //   backgroundColor:'#efefefff',
  //   padding:20,
    
  // },
  h1: {
    fontSize: 45,
    color: '#000000',
  },
  h2: {
    fontSize: 30,
    color: '#000000',
  },
  h3: {
    fontSize: 20,
    color: '#000000',
  },  
});