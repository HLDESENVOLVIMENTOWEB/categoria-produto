// ** React Imports

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Table from 'src/@core/components/table/produtos/Table'
import { useEffect, useState } from 'react'
import { getProducts } from 'src/services/ProductService'

const Produtos = () => {
  const [products, setProducts] = useState([])

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
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <h1>Produtos</h1>
            <Table data={products} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Produtos
