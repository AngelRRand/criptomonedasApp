import { View, Image, SafeAreaView, StatusBar } from 'react-native';
import styles from './styles/App';
import Header from './src/Header';
import Form from './src/Form';
import Cot from './src/Cot';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Header/> 
      <Image
        source={{uri:'https://i.postimg.cc/qBWhMx4Z/cryptomonedas.png'}}
        style={styles.imagen}

      /> 
      <Form/>
    </SafeAreaView> 
  );
}
