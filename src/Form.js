import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/Form'
import { Picker } from '@react-native-picker/picker'
const Form = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moneda</Text>
      <View style={{ width: '100%', }}>

        <Picker
          
          itemStyle={{ height: 120 }}
        >
          <Picker.Item label="- Seleccione -" value="" />
          <Picker.Item label="Dolar de Estados Unidos" value="USD" />
          <Picker.Item label="Peso Mexicano" value="MXN" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Libra Esterlina" value="GBP" />
        </Picker>

        

      </View>

      <Text style={styles.text}>Criptomoneda</Text>
    </View>
  )
}

export default Form