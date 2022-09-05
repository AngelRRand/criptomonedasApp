import { ScrollView, Image, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles/App';
import Header from './src/Header';
import Form from './src/Form';
import Cot from './src/Cot';
import axios from 'axios'
export default function App() {


  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
  const [consultarAPI, setConsultarAPI] = useState(false);
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);


  useEffect(() => {
    const consultarPrecio = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        const result = await axios.get(url)
        setCargando(true)
        setTimeout(() => {
          
          setResultado(result.data.DISPLAY[criptoMoneda][moneda])
          setConsultarAPI(false)
          setCargando(false)
        }, 3000);
      }
    }
    consultarPrecio();
  }, [consultarAPI]);

  //Mostrar el spinner o el resulttado

  const component = cargando ? <ActivityIndicator size='large' color='#fff'/> :<Cot resultado={resultado}/>
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
      {
        resultado.length === 0 ?
          <></>
          :
          component
        
      }

    </SafeAreaView>
  );
}
