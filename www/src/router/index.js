import Vue from 'vue'
import Router from 'vue-router'
import Boards from 'components/Boards'
import Board from 'components/Board'
import List from 'components/List'
import Register from '../components/register'
import Login from '../components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/boards',
      name: 'Boards',
      component: Boards
    },{
      path: '/boards/:id',
      name: 'Board',
      component: Board
    },
    // {
    //   path: '/boards/:id/lists/:id',
    //   nmae: 'List',
    //   component: List
    // },{
    //   path: '/boards/:id/lists/:id/tasks',
    //   nmae: 'Tasks',
    //   component: Tasks
    // },
    
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
