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

interface FormModalDTO {
  setLoaging: any;
}


const FormModalProduto = ({setLoaging}:FormModalDTO) => {
  const [open, setOpen] = useState(false);

  const [nome_produto, setNomeProduto] = useState('');
  const [valor_produto, setValorProduto] = useState('');
  const [id_categoria_produto, setidCateogoriaProduto] = useState('');
  const [data_cadastro, setDataCadastro] = useState('');


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Form submitted', { nome_produto, valor_produto, id_categoria_produto,  data_cadastro });
    setLoaging(true)
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">CRIAR PRODUTO</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="form-modal-title"
      >
        <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
          <Typography id="form-modal-title" variant="h6">
            Cadastro de produto
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Nome do produto"
            type="text"
            value={nome_produto}
            onChange={(e) => setNomeProduto(e.target.value)}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Valor do produto"
            type="text"
            value={valor_produto}
            onChange={(e) => setValorProduto(e.target.value)}
            required
          />

         <TextField
            fullWidth
            margin="normal"
            label="id_categoria_produto"
            type="text"
            value={id_categoria_produto}
            onChange={(e) => setidCateogoriaProduto(e.target.value)}
            required
          />

          <TextField
            fullWidth
            margin="normal"
            label="data_cadastro"
            type="text"
            value={data_cadastro}
            onChange={(e) => setDataCadastro(e.target.value)}
            required
          />


          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Cadastrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModalProduto;
