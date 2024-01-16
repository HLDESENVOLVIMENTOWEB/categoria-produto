// ** React Imports

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react'
import { getProducts } from 'src/services/ProductService'
import TableProdutos from 'src/@core/layouts/components/table/produtos/Table'
import FormModalProduto from 'src/@core/layouts/components/modal/criar-produto'
import SuccessAlert from 'src/@core/layouts/components/alert/SuccessAlert'

interface showSuccessAlertDTO {
  status: boolean
  msg: string
}

interface showErrorAlertDTO {
  status: boolean
  msg: string
}

const Produtos = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoaging] = useState(false);

  const [showSuccessAlert, setShowSuccessAlert] = useState<showSuccessAlertDTO>({
    status: false,
    msg: ''
  });

  const [showErrorAlert, setShowErrorAlert] = useState<showSuccessAlertDTO>({
    status: false,
    msg: ''
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts()
        setProducts(data)
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
            {showSuccessAlert.status && (
                <SuccessAlert message={showSuccessAlert.msg} duration={3000} />
            )}
             {showErrorAlert.status && (
                <SuccessAlert message={showErrorAlert.msg} duration={3000} />
            )}
           <Grid container spacing={6}>
              <Grid item xs={10}>
                <h1>Produtos</h1>
              </Grid>
              <Grid item xs={2}>
                <FormModalProduto setShowErrorAlert={setShowErrorAlert} setShowSuccessAlert={setShowSuccessAlert} setLoaging={setLoaging} />
              </Grid>
            </Grid>
            <TableProdutos setShowErrorAlert={setShowErrorAlert} setShowSuccessAlert={setShowSuccessAlert} data={products} setLoaging={setLoaging} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Produtos
