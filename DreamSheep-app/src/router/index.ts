import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/signup'  // Rediriger vers la page de signup
    },
    {
      path: '/home',
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
  {
    path: '/editdream/:id',
    name: 'editdream',
    component: () => import('../views/EditDreamView.vue'), // Utilisez le même composant que pour la création
    props: true // Permet de passer les paramètres de route comme props au composant
  },
  {
    path: '/stat',
    name: 'stat',
    component: () => import('../views/StatView.vue'), 
  },
  {
    path: '/dreams/:id/comments',
    name: 'comments',
    component: () => import('../views/CommentView.vue'),
  },
  
  {
    path: '/newdreamhome',
    name: 'newdreamhome',
    component: () => import('../views/NewDreamhomeView.vue'),}
    ,{
    path: '/report/:id',
    name: 'Report',
    component: () => import('@/components/Report.vue'),
    props: true
  },
  {
    path:'/auth/confirm-password-reset/:token',
    name:'reset-password',
    component: () => import('../views/ResetPasswordView.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPasswordView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  }
  ]
})

export default router
