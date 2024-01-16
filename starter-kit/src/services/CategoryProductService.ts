import axios from 'axios'
import { BASE_URL } from 'src/configs/api'
import { CategoriaDTO } from 'src/types'


export const getCategoryProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}categoria-produtos`)

    return response.data
  } catch (error) {
    throw error
  }
}

export const getCategoryProductsId = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}categoria-produtos/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}



export const createCategoryProtucts = async ({nome_categoria }:CategoriaDTO) => {
  try {
    const response = await axios.post(`${BASE_URL}categoria-produtos`,{
      nome_categoria: nome_categoria
    })

    return response.data
  } catch (error) {
    throw error
  }
}


export const updateCategoryProtucts = async ({nome_categoria, id }:CategoriaDTO) => {
  try {
    const response = await axios.put(`${BASE_URL}categoria-produtos/${id}`,{
      nome_categoria: nome_categoria
    })

    return response.data
  } catch (error) {
    throw error
  }
}


export const deleteCategoryProducts = async (id: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}categoria-produtos/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}

