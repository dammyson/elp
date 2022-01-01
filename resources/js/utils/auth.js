// import Cookies from 'js-cookie';

const TokenKey = 'isLogged';
const TokenValue = localStorage.getItem(TokenKey);

export function isLogged() {
  // return console.log(TokenValue, TokenKey);
  if (TokenValue){
    return true;
  } else {
    return false;
  }
}

export function setLogged(isLogged) {
  return localStorage.setItem(TokenKey, isLogged);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
