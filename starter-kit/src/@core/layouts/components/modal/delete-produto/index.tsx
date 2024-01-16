import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import { deleteProducts } from 'src/services/ProductService';

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

interface FormModalProdutoDeleteDTO {
  id: number
  setLoaging: any
  setShowSuccessAlert: any
  setShowErrorAlert: any
}

const FormModalProdutoDelete = ({id, setLoaging, setShowSuccessAlert, setShowErrorAlert }: FormModalProdutoDeleteDTO) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoaging(false)
    try {

      deleteProducts(id)
      setShowSuccessAlert({
        status: true,
        msg: 'Deletado com sucesso'
      });
      setTimeout(() => setShowSuccessAlert({
        status: false,
        msg: ''
      }), 3000);

    } catch (error) {
      setShowErrorAlert({
        status: true,
        msg: 'Error ao deletar prodtuo'
      });
      setTimeout(() => setShowErrorAlert({
        status: false,
        msg: ''
      }), 3000);
    }

    setLoaging(true)
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

export default FormModalProdutoDelete;
