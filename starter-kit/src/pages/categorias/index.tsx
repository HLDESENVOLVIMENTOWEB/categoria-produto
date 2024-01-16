import React, { useState, useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import { getCategoryProducts } from 'src/services/CategoryProductService'
import TableCategoria from 'src/@core/components/table/categorias/Table'
import FormModal from 'src/@core/layouts/components/modal/criar-categoria'
import FallbackSpinner from 'src/@core/components/spinner'

const Categorias = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoaging] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategoryProducts()
        setCategories(data)
        setLoaging(false)
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
                <h1>Categorias</h1>
              </Grid>
              <Grid item xs={2}>
                <FormModal setLoaging={setLoaging}/>
              </Grid>
            </Grid>
            {
              loading ?
              <FallbackSpinner />
              :    <TableCategoria setLoaging={setLoaging} data={categories} />
            }

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Categorias
