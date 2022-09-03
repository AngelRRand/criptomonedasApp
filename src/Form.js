import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/Form'

const Form = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moneda</Text>
      <Text style={styles.text}>Criptomoneda</Text>
    </View>
  )
}

export default Form