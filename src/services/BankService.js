import axios from 'axios'
import { saveBanks } from '../database/Database'

const API_URL = 'https://dev.obtenmas.com/catom/api/challenge/banks'

export const getBanks = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching:', error)
    throw error
  }
}

export const fetchAndSaveBanks = async () => {
  try {
    const data = await getBanks()
    await saveBanks(data)
    return data
  } catch (error) {
    console.error('Error fetching and saving:', error)
    throw error
  }
}
