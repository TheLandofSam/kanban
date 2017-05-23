let Lists = require('../models/board/')


export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/blog/:title',
      name: 'Blog',
      component: Blog,
      props: true
    },
    {
      path: '/new-blog',
      name: 'NewBlog',
      component: NewBlog

    }
  ]
})
