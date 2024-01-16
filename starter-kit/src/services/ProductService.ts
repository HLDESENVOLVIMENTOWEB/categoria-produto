// src/services/ProductService.ts
import axios from 'axios'
import { BASE_URL } from 'src/configs/api'
import { ProdutoDTO } from 'src/types'



export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}produtos`)

    return response.data
  } catch (error) {
    throw error
  }
}

export const getProductsId = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}produtos/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}



export const createProducts = async ({nome_produto, valor_produto, id_categoria_produto} : ProdutoDTO) => {
  try {
    const response = await axios.post(`${BASE_URL}produtos`, {
      nome_produto: nome_produto,
      valor_produto: valor_produto,
      id_categoria_produto: id_categoria_produto
    })

    return response.data
  } catch (error) {
    throw error
  }
}

export const updateProducts = async ({nome_produto, valor_produto, id_categoria_produto, id} : ProdutoDTO) => {
  try {
    const response = await axios.put(`${BASE_URL}produtos/${id}`, {
      nome_produto: nome_produto,
      valor_produto: valor_produto,
      id_categoria_produto: id_categoria_produto
    })

    return response.data
  } catch (error) {
    throw error
  }
}


export const deleteProducts = async (id: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}produtos/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}
