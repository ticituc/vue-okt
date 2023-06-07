import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '../views/TasksView.vue'
import TodoItemView from "../views/TodoItemView.vue";
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TasksView
    },
    {
      path: '/todo-item/:id',
      name: 'todoItem',
      component: TodoItemView,
      beforeEnter:()=>{

      }, 
      
      
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})



router.beforeEach((to, from) => {

  const authStore = useAuthStore();

  console.log("authStore", authStore.isAuth);
  if (!authStore.isAuth && to.name != "home") {
    return {
      name: 'home'
    }
  }

  return true
})


router.afterEach((to, from) => {
  console.log("TO", to);
  console.log("From ", from);
})


export default router
