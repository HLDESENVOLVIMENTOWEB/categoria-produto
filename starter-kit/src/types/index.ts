export interface CategoriaDTO {
  nome_categoria: string
  id?: number
}

export interface ProdutoDTO {
  nome_produto: string,
  valor_produto: string,
  id_categoria_produto: number | undefined,
  id?: number
}

export  interface showSuccessAlertDTO {
  status: boolean
  msg: string
}

export  interface showErrorAlertDTO {
  status: boolean
  msg: string
}

