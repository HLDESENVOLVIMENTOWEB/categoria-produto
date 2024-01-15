import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';


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


const FormModalCategoriaDelete = () => {
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
      <Button onClick={handleOpen} variant="contained" color="error">DELETE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="form-modal-title"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <Typography id="form-modal-title" variant="h6">
            Tem certeza que deseja deletar?
          </Typography>

          <Button type="submit" fullWidth variant="contained" color="error" sx={{ mt: 2 }} >
           Deletar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModalCategoriaDelete;
