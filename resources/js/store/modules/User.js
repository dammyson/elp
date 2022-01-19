// import axios from 'axios';
// import store from '@/store';
import { login, logout, getInfo, register } from '@/api/auth';
import { resetRouter } from '@/router';
const state = {
  user: {
    id: null,
    token: localStorage.getItem('Token') || null,
    user: null,
    name: '',
    avatar: '',
    roles: [],
    permissions: [],
  },
};
const getters = {
  loggedIn: (state) => {
    if (state.user.token !== null) {
      return true;
    } else {
      return false;
    }
  },
};
const actions = {
  loginUser({ state, commit }, user) {
    const { email, password } = user;
    return new Promise((resolve, reject) => {
      login({
        email: email.trim(),
        password: password,
      }).then(response => {
        console.log(response);
        if (response.token){
          const token = response.token;

          localStorage.setItem('Token', token);
          commit('SET_TOKEN', token);
          resolve(response);
        }
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  },
  register({ state, commit }, data){
    return new Promise((resolve, reject) => {
      register({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        company: data.company,
        slug: data.slug,
        phone_number: data.phone_number,
        address: data.address,
        confirm_password: data.confirm_password,
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  },
  destroyToken(context) {
    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          console.log(response);
          localStorage.removeItem('Token');
          context.commit('destroyToken');
          resolve(response);
        }).catch(error => {
          localStorage.removeItem('Token');
          context.commit('destroyToken');
          reject(error);
        });
      });
    }
  },
  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          localStorage.removeItem('Token');
          commit('destroyToken');
          resetRouter();
          resolve();
        })
        .catch(error => {
          localStorage.removeItem('Token');
          commit('destroyToken');
          resetRouter();
          reject(error);
        });
    });
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      localStorage.removeItem('Token');
      commit('destroyToken');
      resolve();
    });
  },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(response => {
          console.log(response);
          const { data } = response;

          if (!data) {
            reject('Verification failed, please Login again.');
          }
          console.log(response.data[0].roles, 'roles');
          // console.log(permissions, 'permissions');
          // roles must be a non-empty array
          if (!response.data[0].roles || response.data[0].roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!');
          }

          commit('SET_ROLES', response.data[0].roles);
          commit('SET_PERMISSIONS', response.data[0].permissions);
          commit('SET_NAME', response.data[0].name);
          commit('SET_AVATAR', response.data[0].avatar);
          commit('SET_ID', response.data[0].id);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

};
const mutations = {
  SET_ID: (state, id) => {
    state.user.id = id;
  },
  SET_TOKEN: (state, token) => {
    state.user.token = token;
  },
  destroyToken: (state) => {
    state.user.token = null;
  },
  SET_NAME: (state, name) => {
    state.user.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.user.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.user.roles = roles;
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.user.permissions = permissions;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
