import { View, Image, SafeAreaView, StatusBar } from 'react-native';
import { useState } from 'react';
import styles from './styles/App';
import Header from './src/Header';
import Form from './src/Form';
import Cot from './src/Cot';

export default function App() {
  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
  const [consultarAPI, setConsultarAPI] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <Image
        source={{ uri: 'https://i.postimg.cc/qBWhMx4Z/cryptomonedas.png' }}
        style={styles.imagen}

      />
      <Form
        moneda={moneda}
        setMoneda={setMoneda}
        criptoMoneda={criptoMoneda}
        setCriptoMoneda={setCriptoMoneda}
        setConsultarAPI={setConsultarAPI}
      />
    </SafeAreaView>
  );
}
