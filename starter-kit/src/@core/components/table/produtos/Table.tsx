import React from 'react'

interface Item {
  id: number
  data_cadastro: string
  nome_produto: string
  valor_produto: string
  id_categoria_produto: number
}
interface TableProps {
  data: Item[]
}

function Table({ data }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome Produto</th>
          <th>Valor categoria</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome_produto}</td>
            <td>{item.valor_produto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
