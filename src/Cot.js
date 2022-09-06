import { View, Text, Platform } from 'react-native'
import React from 'react'
import styles from '../styles/Cot'

const Cot = ({ resultado }) => {
  return (
    <View style={styles.containerCot}>

      <View style={styles.info}>
        <Text style={styles.textPrice }>{resultado.PRICE}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>Precio mas alto del dia: {resultado.HIGHDAY}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>Precio mas bajo del dia: {resultado.LOWDAY}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>Variacion ultimas 24 horas: {resultado.CHANGEPCT24HOUR}%</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>Ultima Actualizacion: {resultado.LASTUPDATE}</Text>
      </View>

    </View>
  )
}

export default Cot