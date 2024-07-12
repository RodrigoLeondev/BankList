import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Toca el botón para ir a la lista de Bancos 🏦
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('BankListScreen')}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>Bancos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'rgb(0, 0, 0.5)',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: 'rgb(36, 93, 80)',
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    width: 200,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
})

export default HomeScreen
