import axios from 'axios'

export const getCategoryProducts = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/categoria-produtos`)

    return response.data
  } catch (error) {
    throw error
  }
}
