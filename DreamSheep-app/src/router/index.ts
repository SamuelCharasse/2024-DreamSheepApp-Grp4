import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/signup'  // Rediriger vers la page de signup
    },
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
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
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
      path: '/dreams/:id',
      name: 'dream-details',
      component: () => import('../views/DreamDetailsView.vue')
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
  },
  {
    path: '/shop-premium',
    name: 'shop-premium',
    component: () => import('../views/ShopPremiumView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicyView.vue')
  },
  {
    path: '/cgu',
    name: 'cgu',
    component: () => import('../views/CguView.vue')
  },
  {
    path: '/legal',
    name: 'legal',
    component: () => import('../views/LegalNoticeView.vue')
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: () => import('../views/CookiesView.vue')
  },{
    path: '/contact',
    name: 'contact',
    component: () => import('../views/SettingsPages/ContactView.vue')
  },
  ]
})

export default router
