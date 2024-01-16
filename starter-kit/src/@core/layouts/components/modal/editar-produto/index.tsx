import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { getProductsId, updateProducts } from 'src/services/ProductService';
import { getCategoryProducts } from 'src/services/CategoryProductService';


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

interface FormModalEditarProdutoDTO {
  id: number
  setLoaging: any
  setShowSuccessAlert: any
  setShowErrorAlert: any
}


const FormModalEditarProduto = ({ id, setLoaging, setShowSuccessAlert, setShowErrorAlert }:FormModalEditarProdutoDTO) => {
  const [open, setOpen] = useState(false);

  const [nome_produto, setNomeProduto] = useState('');
  const [valor_produto, setValorProduto] = useState('');
  const [id_categoria_produto, setidCateogoriaProduto] = useState<number>();

  const [categories, setCategories] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    try {
      updateProducts({nome_produto, valor_produto, id_categoria_produto, id })
      setShowSuccessAlert({
        status: true,
        msg: 'Alterado com sucesso'
      });
      setTimeout(() => setShowSuccessAlert({
        status: false,
        msg: ''
      }), 3000);
    } catch (error) {
      setShowErrorAlert({
        status: true,
        msg: 'Error ao alterar produto'
      });
      setTimeout(() => setShowErrorAlert({
        status: false,
        msg: ''
      }), 3000);
    }
    setLoaging(true)
    handleClose();
  };

  useEffect(() => {
    async function fetchData(id: number) {
      try {
        const data = await getProductsId(id)
        setNomeProduto(data?.nome_produto)
        setValorProduto(data?.valor_produto)
        setidCateogoriaProduto(data?.id_categoria_produto)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData(id)
  }, [id])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategoryProducts()
        setCategories(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData()
  }, [])

  const handleChange = (event: any) => {
    console.log(event.target.value)
    setidCateogoriaProduto(event.target.value);
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
            Editar de produto
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Nome do produto"
            type="text"
            required
            value={nome_produto}
            onChange={(e) => setNomeProduto(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Valor do produto"
            type="text"
            required
            value={valor_produto}
            onChange={(e) => setValorProduto(e.target.value)}
          />

        <FormControl fullWidth>
          <InputLabel id="id_categoria_produto-label">Categoria</InputLabel>
          <Select
            labelId="id_categoria_produto-label"
            id="id_categoria_produto"
            value={id_categoria_produto}
            label="Age"
            onChange={handleChange}
          >
            {
              categories.length > 0 &&
              // eslint-disable-next-line react/jsx-key
              categories.map((i:any ) => id_categoria_produto ?  <MenuItem defaultChecked={true} value={i.id_categoria_planejameto}>{i.nome_categoria}</MenuItem> : <MenuItem value={i.id_categoria_planejameto}>{i.nome_categoria}</MenuItem>)
             }
          </Select>
        </FormControl>


          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Alterar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModalEditarProduto;
