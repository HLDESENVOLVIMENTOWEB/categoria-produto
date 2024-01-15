import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormModalEditarCategoria from 'src/@core/layouts/components/modal/editar-categoria';
import FormModalCategoriaDelete from 'src/@core/layouts/components/modal/delete-categoria';

interface Item {
  id_categoria_planejameto: number
  nome_categoria: string
}

interface TableProps {
  data: Item[]
}

function TableCategoria({ data }: TableProps) {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome da categoria</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Deletar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id_categoria_planejameto}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome_categoria}
              </TableCell>
              <TableCell><FormModalEditarCategoria /></TableCell>
              <TableCell><FormModalCategoriaDelete /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCategoria