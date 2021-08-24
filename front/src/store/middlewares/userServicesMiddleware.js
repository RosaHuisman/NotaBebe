import config from './utils/api';

import { tokenHeaderMiddleware as authHeader } from './tokenHeaderMiddleware';

export const userService = {
  login,
  logout,
  getAll,
  getById,
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('MyToken');
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        reload();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${config.apiUrl}/profil`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local
      // storage to keep user logged in between page refreshes
      localStorage.setItem('MyToken', JSON.stringify(user));

      return user;
    });
}

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}
