import { View, Text, TouchableHighlight, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Form'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
const Form = ({moneda, setMoneda, criptoMoneda, setCriptoMoneda, setConsultarAPI}) => {
  
  const [criptoMonedas, setCriptoMonedas] = useState([]);


  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const result = await axios.get(url)

      setCriptoMonedas(result.data.Data)
    }
    consultarApi()
  }, []);


  //Funciones

  const obtenerMoneda = moneda => {
    setMoneda(moneda)
  }
  const obtenerCripto = cripto => {
    setCriptoMoneda(cripto)
  }
  const Error = () =>{
    Alert.alert(
      'Error',
      'Ambos campos son obligatorios',
      [
        {Text: 'OK'}
      ]
    )
  }
  const cotizarPrecio = () => {
    if (moneda === '' || criptoMoneda === '') {
      Error();
      return;
    } else {
      setConsultarAPI(true)
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moneda</Text>
      <View style={{ width: '100%', }}>

        <Picker
          selectedValue={moneda}
          itemStyle={{ height: 200 }}
          onValueChange={moneda => obtenerMoneda(moneda)}
        >
          <Picker.Item label="- Seleccione -" value="" />
          <Picker.Item label="Dolar de Estados Unidos" value="USD" />
          <Picker.Item label="Peso Argentino" value="ARG" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Libra Esterlina" value="GBP" />
        </Picker>
      </View>


      <Text style={styles.text}>Criptomoneda</Text>
      <View style={{ width: '100%', }}>

        <Picker
          selectedValue={criptoMoneda}
          itemStyle={{ height: 120 }}
          onValueChange={cripto => obtenerCripto(cripto)}
        >
          <Picker.Item label="- Seleccione -" value="" />
          {criptoMonedas.map(cript => {
            return (
              <Picker.Item key={cript.CoinInfo.id} label={cript.CoinInfo.FullName} value={cript.CoinInfo.Name} />
            )
          })}
        </Picker>
      </View>

      <TouchableHighlight
        style={styles.btn}
        onPress={() => cotizarPrecio()}
      >
        <Text style={styles.btnText}>
          COTIZAR
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default Form