import axios from 'axios'


interface CategoriaDTO {
  nome_categoria: string
  id?: number
}

export const getCategoryProducts = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/categoria-produtos`)

    return response.data
  } catch (error) {
    throw error
  }
}

export const getCategoryProductsId = async (id: number) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/categoria-produtos/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}



export const createCategoryProtucts = async ({nome_categoria }:CategoriaDTO) => {
  try {
    const response = await axios.post(`http://127.0.0.1:8000/api/categoria-produtos`,{
      nome_categoria: nome_categoria
    })

    return response.data
  } catch (error) {
    throw error
  }
}


export const updateCategoryProtucts = async ({nome_categoria, id }:CategoriaDTO) => {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/api/categoria-produtos/${id}`,{
      nome_categoria: nome_categoria
    })

    return response.data
  } catch (error) {
    throw error
  }
}


export const deleteCategoryProducts = async (id: number) => {
  try {
    const response = await axios.delete(`http://127.0.0.1:8000/api/categoria-produtos/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}

