import Vue from 'vue'
import Router from 'vue-router'
import PSI from '@/components/PSI_Process'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PSI',
      component: PSI
    }
  ]
})
