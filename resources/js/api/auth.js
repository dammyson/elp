import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: data,
  });
}

export function register(data) {
  return request({
    url: '/registration',
    method: 'post',
    data: data,
  });
}

export function getInfo(token) {
  return request({
    url: '/users',
    method: 'get',
  });
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  });
}
export function invite() {
  return request({
    url: '/',
    method: 'post',
  });
}

