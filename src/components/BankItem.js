import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

const BankItem = ({ bank }) => {
  return (
    <View style={styles.bankItem}>
      <Text style={styles.title}>{bank.bankName}</Text>
      <Text style={styles.text}>Frase: {bank.description}</Text>
      <Text style={styles.text}>Age: {bank.age}</Text>
      <Text style={styles.text}>URL: {bank.url}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bankItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 16,
    backgroundColor: 'rgb(255, 255, 255, 0.5)',
    borderRadius: 15,
    shadowColor: 'rgb(36, 93, 80)',
    shadowOffset: { width: 0, height: 2 },
    elevation: 8,
    borderBottomWidth: Platform.OS === 'ios' ? 5 : 1,
    borderBottomColor:
      Platform.OS === 'ios' ? 'rgb(36, 93, 80)' : 'rgb(36, 93, 80)',
    marginBottom: Platform.OS === 'ios' ? 5 : 1,
    borderBottomColor:
      Platform.OS === 'ios' ? 'rgb(36, 93, 80)' : 'rgb(36, 93, 80)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgb(0, 0, 0.5)',
    marginBottom: 10,
  },
})

export default BankItem
