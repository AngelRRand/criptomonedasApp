import { View, Text, Platform } from 'react-native'
import React from 'react'
import styles from '../styles/Cot'

const Cot = ({resultado}) => {
  return (
    <View>
      <Text style={styles.encabezado}>{resultado.PRICE}</Text>
    </View>
  )
}

export default Cot