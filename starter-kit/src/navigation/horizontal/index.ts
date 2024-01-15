// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
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

export default navigation
