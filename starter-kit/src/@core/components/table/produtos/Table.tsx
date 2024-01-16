import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormModalProdutoDelete from 'src/@core/layouts/components/modal/delete-produto';
import FormModalEditarProduto from 'src/@core/layouts/components/modal/editar-produto';

interface Item {
  id: number
  data_cadastro: string
  nome_produto: string
  valor_produto: string
  id_categoria_produto: number
}
interface TableProps {
  data: Item[]
  setLoaging: any
}

function TableProdutos({ data, setLoaging }: TableProps) {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nome da produto</TableCell>
          <TableCell>Valor do produto</TableCell>
          <TableCell>Editar</TableCell>
          <TableCell>Deletar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.nome_produto}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.valor_produto}
            </TableCell>
            <TableCell><FormModalEditarProduto  id={row.id} setLoaging={setLoaging}/></TableCell>
            <TableCell><FormModalProdutoDelete id={row.id} setLoaging={setLoaging} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TableProdutos
