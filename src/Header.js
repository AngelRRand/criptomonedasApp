import {  Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles/Header'

const Header = () => {
  return (
    <SafeAreaView  >
      <Text style={styles.encabezado}>CriptoMonedas</Text>
    </SafeAreaView>
  )
}

export default Header