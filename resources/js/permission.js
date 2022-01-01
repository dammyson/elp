import router from './router';
import store from './store';
import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { isLogged } from '@/utils/auth';
import getPageTitle from '@/utils/get-page-title';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['/login', '/auth-redirect']; // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start();
  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const isUserLogged = isLogged();

  if (isUserLogged) {
    console.log(to.path, 'to path');
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      console.log('login Path');
      next({ path: '/' });
      NProgress.done();
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      console.log(store.getters);
      console.log(store.roles);
      // const hasRoles = true;
      if (hasRoles) {
        next();
        console.log('Has Roles');
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['manager','editor']
          // const { data } = await store.dispatch('user/getInfo');
          const { roles, permissions } = await store.dispatch('user/getInfo');
          // const { roles, permissions } = { 'roles': 'admin', 'permissions': 'view menu element ui' };
          // const permissions = ['view menu element ui', 'view menu permission', 'view menu components', 'view menu charts', 'view menu nested routes', 'view menu table', 'view menu administrator', 'view menu theme', 'view menu clipboard', 'view menu excel', 'view menu zip', 'view menu pdf', 'view menu i18n', 'manage user', 'manage article', 'manage permission'];
          // const roles = ['admin'];
          // console.log(data, 'Roles');
          console.log({ roles, permissions }, 'Permisions');
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', { roles, permissions });
          console.log(accessRoutes, 'accessRoutes');
          router.addRoute(accessRoutes);
          next({ ...to, replace: true });
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken');
          Message.error(error.message || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
    console.log(isUserLogged, 'loggedIn true');
  } else {
    /* has no token*/
    console.log(isUserLogged, 'loggedIn false');

    if (whiteList.indexOf(to.matched[0] ? to.matched[0].path : '') !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
