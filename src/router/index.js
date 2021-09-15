import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import Error404 from '../views/Error404.vue';
import Admin from '../views/Admin.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import UnAuthorized from '../views/UnAuthorized.vue';
import Roles from './roles';
import store from '../store';

function guardMyRoute(to, from, next) {
  const vuexStore = JSON.parse(localStorage.getItem('vuex'));
  if (to.meta && to.meta.authorize) {
    if (
      vuexStore?.userInfo?.roles &&
      vuexStore?.userInfo?.roles[0].name === to.meta.authorize[0].name
    ) {
      next();
    } else if (vuexStore.userInfo) {
      next('/unauthorized');
    } else {
      next({ path: '/login', query: { returnUrl: to.path } });
    }
  }
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },

  {
    path: '/liked',
    name: 'Liked',
    component: () =>
      import(/* webpackChunkName: "usersPokemons" */ '../views/Liked.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/super-liked',
    name: 'SuperLiked',
    component: () =>
      import(/* webpackChunkName: "usersPokemons" */ '../views/SuperLiked.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/rejected',
    name: 'Rejected',
    component: () =>
      import(/* webpackChunkName: "usersPokemons" */ '../views/Rejected.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/pokemons/:id',
    name: 'PokemonDetails',
    component: () =>
      import(
        /* webpackChunkName: "usersPokemons" */ '../views/PokemonDetails.vue'
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/admin',
    beforeEnter: guardMyRoute,
    component: Admin,
    meta: {
      authorize: Roles[0],
    },
  },
  {
    path: '/unauthorized',
    component: UnAuthorized,
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: Error404,
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters['users/isLoggedIn'])
    next({ name: 'Login' });
  else next();
});

export default router;
