import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

import layout from '../views/layout'
import login from '../views/login'

const router = new VueRouter({
    routes: [
        {path:'/',redirect:'/login'},
        {path:'/login',component:login},
        {path:'/layout',component:layout}
    ]
})

export default router