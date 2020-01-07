import Vue from 'vue'
import VueRouter from 'vue-router'



const home = () => import('../views/home/home');
const category = () => import('../views/category/category');
const cart = () => import('../views/cart/cart');
const profile = () => import('../views/profile/profile');
const Detail = () => import('../views/detail/Detail');

Vue.use(VueRouter);

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
