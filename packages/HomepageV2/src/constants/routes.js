// main pages
import Home from '../components/pages/Home'
import TermsOfService from '../components/pages/TermsOfService'

const routes = [
  {
    path:      '/',
    component: Home,
    exact:     true
  },
  {
    path:       '/termsofservice',
    component:  TermsOfService,
    exact:      true
  }
]

export default routes
