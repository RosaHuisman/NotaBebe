// Action types
export const FETCH_USER_LOGGED = 'FETCH_USER_LOGGED';
export const SAVE_USER_LOGGED = 'SAVE_USER_LOGGED';

// Action creators
export const fetchUserLogged = () => ({
  type: FETCH_USER_LOGGED,
});

export const saveUserLogged = (userLogged) => ({
  type: SAVE_USER_LOGGED,
  userLogged,
});
