// ** React Imports

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react'
import { getProducts } from 'src/services/ProductService'
import TableProdutos from 'src/@core/components/table/produtos/Table'
import FormModalProduto from 'src/@core/layouts/components/modal/criar-produto'

const Produtos = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoaging] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData()
  }, [loading])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
           <Grid container spacing={6}>
              <Grid item xs={10}>
                <h1>Produtos</h1>
              </Grid>
              <Grid item xs={2}>
                <FormModalProduto setLoaging={setLoaging} />
              </Grid>
            </Grid>
            <TableProdutos data={products} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Produtos
