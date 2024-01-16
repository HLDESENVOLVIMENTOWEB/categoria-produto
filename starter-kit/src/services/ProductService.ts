// src/services/ProductService.ts
import axios from 'axios'

interface ProdutoDTO {
  nome_produto: string,
  valor_produto: string,
  id_categoria_produto: number | undefined,
  id?: number
}


export const getProducts = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/produtos`)

    return response.data
  } catch (error) {
    throw error
  }
}

export const getProductsId = async (id: number) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/produtos/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}



export const createProducts = async ({nome_produto, valor_produto, id_categoria_produto} : ProdutoDTO) => {
  try {
    const response = await axios.post(`http://127.0.0.1:8000/api/produtos`, {
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
    const response = await axios.put(`http://127.0.0.1:8000/api/produtos/${id}`, {
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
    const response = await axios.delete(`http://127.0.0.1:8000/api/produtos/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}
