import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from "@/views/UserList/UserList";
import UserForm from "@/views/UserForn/UserForm";

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: UserList
  },
  {
    path: '/user-form',
    name: 'UserForm',
    component: UserForm
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
