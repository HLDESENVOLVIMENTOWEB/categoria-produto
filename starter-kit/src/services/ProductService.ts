// src/services/ProductService.ts
import axios from 'axios'

export const getProducts = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/produtos`)

    return response.data
  } catch (error) {
    throw error
  }
}
