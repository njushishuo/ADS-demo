import Vue from 'vue'
import Router from 'vue-router'
import PSI_Slow from '@/components/PSI_Slow'
import PSI_Fast from '@/components/PSI_Fast'
import PSI_Cset from '@/components/PSI_Cset'
import PSI_Test from '@/components/PSI_Test'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/fast',
      name: 'PSI_Fast',
      component: PSI_Fast
    },

    {
      path: '/slow',
      name: 'PSI_Slow',
      component: PSI_Slow
    },
    {
      path: '/cset',
      name: 'PSI_Cset',
      component: PSI_Cset
    },
    {
      path: '/test',
      name: 'PSI_Test',
      component: PSI_Test
    },
  ]
})
