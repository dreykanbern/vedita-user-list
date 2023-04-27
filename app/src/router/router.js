import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from "@/views/UserList/UserList";
import UserCreated from "@/views/UserCreated/UserCreated";

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: UserList
  },
  {
    path: '/user-created',
    name: 'UserCreated',
    component: UserCreated
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
