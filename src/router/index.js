import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'
import Project from '../components/Project.vue'
import Coop from '../components/Coop.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/coop',
      name: 'Coop',
      component: Coop
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
