import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/add',
      name: 'add-restaurant-form',
      component: () => import('@/views/AddRestaurantView.vue')
    },
    {
      path: '/update/:id',
      name: 'update-restaurant',
      component: () => import('@/views/UpdateRestaurantView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/NotFoundView.vue') // Assuming Test.vue uses the TestComponent
    }
  ]
})

export default router
