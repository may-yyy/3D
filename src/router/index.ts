import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        component: () =>import('@/views/home.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'), // 懒加载组件
        children:[
            {
               path:'/demo1',
               name:'demo1',
               component:() => import('@/views/three/demo1.vue')
            },
            {
                path:'/demo2',
                name:'demo2',
                component:() => import('@/views/three/demo2.vue')
            },
            {
                path:'/demo3',
                name:'demo3',
                component:() => import('@/views/three/demo3.vue')
            },
            {
                path:'/demo5',
                name:'demo5',
                component:() => import('@/views/three/demo5.vue')
            },
            {
                path:'/demo4',
                name:'demo4',
                component:() => import('@/views/three/demo4.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
