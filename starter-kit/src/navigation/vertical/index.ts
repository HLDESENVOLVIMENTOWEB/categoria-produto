// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'bx:home-circle'
    },
    {
      title: 'Categorias',
      path: '/categorias',
      icon: 'bx:tag'
    },
    {
      path: '/produtos',
      title: 'Produtos',
      icon: 'bx:card'
    }
  ]
}

export default navigation
