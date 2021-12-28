import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/login',
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
    url: '/api/logout',
    method: 'post',
  });
}

export function csrf() {
  return request({
    url: '/sanctum/csrf-cookie',
    method: 'get',
  });
}
