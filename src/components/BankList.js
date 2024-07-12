import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import BankItem from './BankItem'
import { fetchAndSaveBanks } from '../services/BankService'
import { getBanksFromStorage } from '../database/Database'

const BankList = () => {
  const [banks, setBanks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadBanks()
  }, [])

  //Obtención de datos desde almacenados en la base de datos o API
  const loadBanks = async () => {
    const storeBanks = await getBanksFromStorage()
    if (storeBanks && storeBanks.length > 0) {
      setBanks(storeBanks)
      setLoading(false)
    } else {
      fetchBanks()
    }
  }

  //Obtención de datos desde API
  const fetchBanks = async () => {
    try {
      const data = await fetchAndSaveBanks()
      setBanks(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching:', error)
      setLoading(false)
    }
  }
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={banks}
        keyExtractor={(item) => item.bankName}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <BankItem bank={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default BankList
