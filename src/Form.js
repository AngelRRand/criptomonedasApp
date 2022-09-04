import { View, Text, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Form'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'
const Form = () => {
  const [moneda, setMoneda] = useState('');
  const [criptoMoneda, setCriptoMoneda] = useState('');
  const [criptoMonedas, setCriptoMonedas] = useState('');


  useEffect(() => {
    const consultarApi = async()=>{
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD' 
      const result = await axios.get(url)

      setCriptoMonedas(result.data.Data)
    }
    consultarApi()
  }, []);
  const obtenerMoneda = moneda =>{
    setMoneda(moneda)
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moneda</Text>

      <Picker 
        selectedValue={moneda}
        itemStyle={{ height: 120 }} 
        onValueChange={moneda=> obtenerMoneda(moneda)}
      >
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dolar de Estados Unidos" value="USD" />
        <Picker.Item label="Peso Argentino" value="ARG" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>


      <Text style={styles.text}>Criptomoneda</Text>
    </View>
  )
}

export default Form