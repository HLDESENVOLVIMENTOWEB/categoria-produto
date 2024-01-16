import React, {  useEffect, useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import { getCategoryProductsId, updateCategoryProtucts } from 'src/services/CategoryProductService';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface FormModalEditarCategoriaDTO {
  id: number
  setLoaging: any
}

const FormModalEditarCategoria = ({ id, setLoaging }:FormModalEditarCategoriaDTO) => {
  const [open, setOpen] = useState(false);
  const [nome_categoria, setNomeCategoria] = useState('');


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    updateCategoryProtucts({nome_categoria, id })
    setLoaging(true)
    handleClose();
  };


  useEffect(() => {
    async function fetchData(id: number) {
      try {
        const data = await getCategoryProductsId(id)
        setNomeCategoria(data?.nome_categoria)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData(id)
  }, [id])




  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">EDITAR</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="form-modal-title"
      >
       <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <Typography id="form-modal-title" variant="h6">
            Editar de categoria
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Nome da categoria"
            type="text"
            value={nome_categoria}
            onChange={(e) => setNomeCategoria(e.target.value)}
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }} >
            Alterar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModalEditarCategoria;
