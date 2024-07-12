import React from 'react'
import { StyleSheet, View } from 'react-native'
import BankList from '../components/BankList'

const BankListScreen = () => {
  return (
    <View style={styles.container}>
      <BankList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default BankListScreen
