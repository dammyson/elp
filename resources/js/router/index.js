/* eslint-disable curly */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from '../components/Login';
// import Dashboard from '../components/Dashboard';
// import Home from '../components/Home';
import Logout from '../components/Logout';
import Register from '@/pages/samples/auth-pages/register';
// import Profile from '@/pages/dashboard/profile/profile';
import layout from '../layout';
import store from '../store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

Vue.use(VueRouter)

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/dashboard'),
          meta: {
            requiresAuth: true
          }
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      component: layout,
      children: [
        {
          path: '',
          name: 'profile',
          component: () => import('@/pages/dashboard/profile/profile'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/residents',
      component: layout,
      children: [
        {
          path: '',
          name: 'residents',
          component: () => import('@/pages/dashboard/residents/residents'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/manageresidents',
      component: layout,
      children: [
        {
          path: '',
          name: 'manageresidents',
          component: () => import('@/pages/dashboard/residents/manageresidents'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/team',
      component: layout,
      children: [
        {
          path: '',
          name: 'team',
          component: () => import('@/pages/dashboard/team/team'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/complete_invite',
      name: 'complete_invite',
      component: () => import('@/pages/dashboard/completeinvite/complete'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const loggedIN = store.getters['User/loggedIn'];
  console.log(requiresAuth, 'Auth');
  console.log(loggedIN, 'store');

  // this route requires auth, check if logged in
  // if not, redirect to login page.
  // if (requiresAuth && !loggedIN) next({ name: 'Login' })
  // else next();

  if (requiresAuth && !loggedIN) {
    next({ name: 'Login' })
    console.log(requiresAuth && !loggedIN, 'redirected');
    NProgress.done();
    console.log(requiresAuth && !loggedIN);
  } else {
    const UserInfo = store.dispatch('User/getInfo');
    console.log(UserInfo, 'authenticated');
    next() // go to wherever I'm going
    NProgress.done();
  }
  console.log('requires auth');
  console.log(requiresAuth && !loggedIN, 'auth');
});

export function resetRouter() {
  const newRouter = router();
  router.matcher = newRouter.matcher;
  // reset router
}
router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

export default router;
