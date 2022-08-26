import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProduk from "@/views/AddProduk.vue";
import DashBoard from "@/views/DashBoard";
// import PageNotFound from "@/views/PageNotFound";
import InboundPage from "@/views/InboundPage.vue";
import InventoryPage from '@/views/InventoryPage.vue'
import InventoryCustomer from '@/views/InventoryCustomer.vue'
import InventoryCSDummy from '@/views/InventoryCSDummy.vue'
import OrdersPage from '@/views/Orders-Page.vue'
import OutboundPage from '@/views/Outbound-Page.vue'
import ProductPage from '@/views/Product-Page.vue'
import trackingPage from '@/views/tracking-Page.vue'
import IntegrationsPage from '@/views/IntegrationsPage.vue'
import IntegrationAdd from '@/views/IntegrationAddPage.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'

 import DashboardLayout from "@/layouts/DashboardLayout.vue"
 import PublicLayout from "@/layouts/PublicLayout.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/dashboard'
  },
  {
    path: '/homeview',
    name: 'home1',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '',
    component: DashboardLayout,
    children: [
            {
              path: 'dashboard',
              name: 'DashBoard',
              component: DashBoard 
            },
            {
              path: 'produk/add',
              name: 'AddProduk',
              component: AddProduk
            },
            {
              path: 'inbound',
              name: 'InboundPage',
              component: InboundPage 
            },
            {
              path: 'inventory',
              name: 'InventoryPage',
              component:InventoryPage 
            },
            {
              path: 'inventory/customer/:id',
              name: 'InventoryCustomer',
              component:InventoryCustomer 
            },
            {
              path: 'inventory/customer',
              name: 'InventoryCSDummy',
              component:InventoryCSDummy   
            },
            {
              path: 'orders',
              name: 'Orderspage',
              component: OrdersPage
            },
            {
              path: 'outbound',
              name: 'OutboundPage',
              component: OutboundPage
            },
            {
              path: 'produk',
              name: 'ProductPage',
              component: ProductPage
            },
            {
              path: 'tracking',
              name: 'trackingPage',
              component: trackingPage
            },
            {
              path: 'integrations',
              name: 'IntegrationsPage',
              component: IntegrationsPage
            },
            {
              path: 'integrations/add',
              name: 'IntegrationAdd',
              component: IntegrationAdd
            },
    ]
  },

  // {
  //   path: '/:patMatch(.*)*',
  //   name: 'PageNotFound',
  //   component: PageNotFound
  // },

  {
    path: '',
    component : PublicLayout,
    children: [
      {
        path: "/signin",
        component: SignIn
      },
      {
        path: "signup",
        component: SignUp
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
})

export default router
