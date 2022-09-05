const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../view//login')
  },
  {
    path: '/',
    redirect: 'login',
  },
]

export default routes