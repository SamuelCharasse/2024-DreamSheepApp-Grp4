import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsPages/SettingsView.vue')
    },
    {
      path: '/diary',
      name: 'diary',
      component: () => import('../views/DiaryView.vue')
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/LegalNoticeView.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/SettingsPages/InformationsAccountView.vue')
    },
    {
      path: '/newdream',
      name: 'newdream',
      component: () => import('../views/NewDreamView.vue')
    },
    {
      path: '/CGU',
      name: 'CGU',
      component: () => import('../views/CguView.vue')
    },
  {
    path: '/password',
    name: 'password',
    component: () => import('../views/SettingsPages/PasswordChangeView.vue')
  },
  {
    path: '/more-info',
    name: 'more-info',
    component: () => import('../views/SettingsPages/SettingsMoreView.vue')
  }
  ]
})

export default router
