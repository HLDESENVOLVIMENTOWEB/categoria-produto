import React, { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import { deleteCategoryProducts } from 'src/services/CategoryProductService';


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


interface FormModalCategoriaDeleteDTO {
  id: number
  setLoaging: any
  setShowSuccessAlert: any
  setShowErrorAlert: any
}

const FormModalCategoriaDelete = ({id, setLoaging, setShowSuccessAlert, setShowErrorAlert}: FormModalCategoriaDeleteDTO) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoaging(true)
    try {
      deleteCategoryProducts(id)
      setShowSuccessAlert({
        status: true,
        msg: 'deletado com sucesso'
      })
      setTimeout(() => setShowSuccessAlert({
        status: false,
        msg: ''
      }), 3000);
    } catch (error) {
      setShowErrorAlert({
        status: true,
        msg: 'Error ao deletar prodtuo ou existe produto relacionado a essa categoria'
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

export default FormModalCategoriaDelete;
