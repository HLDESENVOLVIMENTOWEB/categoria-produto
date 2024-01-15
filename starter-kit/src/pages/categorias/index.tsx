import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import Table from 'src/@core/components/table/categorias/Table'
import { getCategoryProducts } from 'src/services/CategoryProductService'

const Categorias = () => {
  const [categories, setCategories] = useState([])

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

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <h1>Categorias</h1>
            <Table data={categories} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Categorias
