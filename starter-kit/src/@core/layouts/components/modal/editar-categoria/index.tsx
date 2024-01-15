import React, { useState } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';


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


const FormModalEditarCategoria = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Form submitted');
    handleClose();
  };

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
