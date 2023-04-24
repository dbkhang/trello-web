import Home from './Home/Home'
import SignIn from './SignIn/SingIn'
import SignU from './SignUp/SignUp'
import Board from './Board/Board'
import EditAccount from './EditAccount/EditAccount'


const RoutesConfig = [
  { path: '/', component: Home },
  { path: '/signup', component: SignU },
  { path: '/signin', component: SignIn },
  { path: '/board', component: Board },
  { path: '/editaccount', component: EditAccount }
]

export { RoutesConfig }