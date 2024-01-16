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
  categoria_produto: CategoriaDTO
}

interface CategoriaDTO {
  nome_categoria: string
}
interface TableProps {
  data: Item[]
  setLoaging: any
  setShowSuccessAlert: any
}

function TableProdutos({ data, setLoaging, setShowSuccessAlert }: TableProps) {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nome da produto</TableCell>
          <TableCell>Valor do produto</TableCell>
          <TableCell>Categoria</TableCell>
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
            <TableCell component="th" scope="row">
              {row.categoria_produto.nome_categoria}
            </TableCell>
            <TableCell><FormModalEditarProduto setShowSuccessAlert={setShowSuccessAlert}  id={row.id} setLoaging={setLoaging}/></TableCell>
            <TableCell><FormModalProdutoDelete setShowSuccessAlert={setShowSuccessAlert} id={row.id} setLoaging={setLoaging} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TableProdutos
