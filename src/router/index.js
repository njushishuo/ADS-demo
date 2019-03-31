import Vue from 'vue'
import Router from 'vue-router'
import PSI_Slow from '@/components/PSI_Slow'
import PSI_Fast from '@/components/PSI_Fast'
import PSI_Cset from '@/components/PSI_Cset'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/slow',
      name: 'PSI_Slow',
      component: PSI_Slow
    },
    {
      path: '/fast',
      name: 'PSI_Fast',
      component: PSI_Fast
    },
    {
      path: '/cset',
      name: 'PSI_Cset',
      component: PSI_Cset
    }
  ]
})
