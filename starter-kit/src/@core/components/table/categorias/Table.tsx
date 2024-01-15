import React from 'react'

interface Item {
  id_categoria_planejameto: number
  nome_categoria: string
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
          <th>Nome da categoria</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id_categoria_planejameto}>
            <td>{item.id_categoria_planejameto}</td>
            <td>{item.nome_categoria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
