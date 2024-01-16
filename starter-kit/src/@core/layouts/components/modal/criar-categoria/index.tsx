import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import { createCategoryProtucts } from 'src/services/CategoryProductService';


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


interface FormModalDTO {
  setLoaging: any;
}

const FormModal = ({setLoaging}:FormModalDTO) => {
  const [open, setOpen] = useState(false);

  const [nome_categoria, setNomeCategoria] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoaging(true)
    await createCategoryProtucts({nome_categoria})
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">CRIAR CATEGORIA</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="form-modal-title"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <Typography id="form-modal-title" variant="h6">
            Cadastro de categoria
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
            Cadastrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModal;
