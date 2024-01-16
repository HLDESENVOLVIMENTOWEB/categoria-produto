import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, TextField, Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { createProducts } from 'src/services/ProductService';
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

interface FormModalDTO {
  setLoaging: any;
}


const FormModalProduto = ({setLoaging}:FormModalDTO) => {
  const [open, setOpen] = useState(false);

  const [categories, setCategories] = useState([]);

  const [nome_produto, setNomeProduto] = useState('');
  const [valor_produto, setValorProduto] = useState('');
  const [id_categoria_produto, setidCateogoriaProduto] = useState<number>();


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await createProducts({ nome_produto, valor_produto, id_categoria_produto })
    setLoaging(true);
    handleClose();
  };

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
              categories.map((i:any ) => <MenuItem value={i.id_categoria_planejameto}>{i.nome_categoria}</MenuItem>)
             }
          </Select>
        </FormControl>


          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Cadastrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModalProduto;
