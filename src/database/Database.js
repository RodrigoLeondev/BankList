import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveBanks = async (banks) => {
  try {
    const value = JSON.stringify(banks)
    await AsyncStorage.setItem('@banks', value)
  } catch (error) {
    console.error('Error saving data:', error)
  }
}

export const getBanksFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('@banks')
    return value != null ? JSON.parse(value) : null
  } catch (error) {
    console.error('Error fetching from storage:', error)
    return null
  }
}
