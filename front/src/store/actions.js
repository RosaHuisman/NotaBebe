/* eslint-disable import/prefer-default-export */

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (myTokenDecoded) => ({
  type: SAVE_USER,
  myTokenDecoded,
});

export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SET_SETTINGS_FIELD_VALUE = 'SET_SETTINGS_FIELD_VALUE';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// actions user
export const OPEN_CHANGE_INFOS = 'OPEN_CHANGE_INFOS';
export const CHANGE_INFOS = 'CHANGE_INFOS';
export const TOGGLE_CHANGE_PASSWORD = 'TOGGLE_CHANGE_PASSWORD';
export const CLOSE_FORM = 'CLOSE_FORM';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const INFOS_ERROR = 'INFOS_ERROR';
export const PASSWORD_ERROR = 'PASSWORD_ERROR';
export const SAVE_INFOS_USER = 'SAVE_INFOS_USER';
// export const SAVE_PASSWORD_USER = 'SAVE_PASSWORD_USER';
export const SAVE_NEW_PASSWORD_PARENT = 'SAVE_NEW_PASSWORD_PARENT';
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const CHANGE_FIELD_VALUE_TWO = 'CHANGE_FIELD_VALUE_TWO';

export const CHANGE_TEXT_VALUE = 'CHANGE_TEXT_VALUE';

export const SAVE_USERS_PARENTS = 'SAVE_USERS_PARENTS';
export const FETCH_USERS_PARENTS = 'FETCH_USERS_PARENTS';
export const FETCH_PARENT = 'FETCH_PARENT';

export const SEND_COMMENT = 'SEND_COMMENT';
export const GET_RECAP = 'GET_RECAP';
export const GET_RECAP_SUCCESS = 'GET_RECAP_SUCCESS';
export const SHOW_FIELD_NAP = 'SHOW_FIELD_NAP';
export const CHANGE_CHILD = 'CHANGE_CHILD';
export const CHANGE_MOOD = 'CHANGE_MOOD';
export const CHANGE_TIME_NAP = 'CHANGE_TIME_NAP';

export const FETCH_RECAPS = 'FETCH_RECAPS';

export const SAVE_USER_LOGIN = 'SAVE_USER_LOGIN';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

// export const changeFieldValue = (value, key) => ({
//   type: CHANGE_FIELD_VALUE,
//   key,
//   value,
// });

export const changeFieldValueTwo = (key, value) => ({
  type: CHANGE_FIELD_VALUE_TWO,
  value,
  key,
});

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
});

// actions user
export const openChangeInfos = () => ({
  type: OPEN_CHANGE_INFOS,
});

// export const changeTextValue = (value) => ({
//   type: CHANGE_TEXT_VALUE,
//   value,
// });

export const changeInfos = (id) => ({
  type: CHANGE_INFOS,
  id,
});

export const toggleChangePassword = () => ({
  type: TOGGLE_CHANGE_PASSWORD,
});

export const closeFormAction = () => ({
  type: CLOSE_FORM,
});

export const changePassword = (id) => ({
  type: CHANGE_PASSWORD,
  id,
});

export const saveNewPasswordParent = () => ({
  type: SAVE_NEW_PASSWORD_PARENT,
})

export const passwordError = () => ({
  type: LOGIN_ERROR,
});

export const infosError = () => ({
  type: LOGIN_ERROR,
});

export const saveInfosUser = () => ({
  type: SAVE_INFOS_USER,
});

// export const savePasswordUser = () => ({
//   type: SAVE_PASSWORD_USER,
// });

export const fetchUsersParents = () => ({
  type: FETCH_USERS_PARENTS,
});


export const saveUsersParents = (users_parents) => ({
  type: SAVE_USERS_PARENTS,
  payload: users_parents,
});



export const sendComment = () => ({
  type: SEND_COMMENT,
});

export const createGetRecapAction = () => ({
  type: GET_RECAP,
});

export const fetchRecaps = () => ({
  type: FETCH_RECAPS,
});

export const showFieldNap = () => ({
  type: SHOW_FIELD_NAP,
});

export const changeTextValue = (key, value) => ({
  type: CHANGE_TEXT_VALUE,
  value,
  key,
});

export const changeChild = (key, value) => ({
  type: CHANGE_CHILD,
  value,
  key,
});

export const changeMood = (key, value) => ({
  type: CHANGE_MOOD,
  value,
  key,
});

export const changeTimeNap = (key, value) => ({
  type: CHANGE_TIME_NAP,
  value,
  key,
});

export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
});

export const saveUserData = (favorites) => ({
  type: SAVE_USER_DATA,
  payload: favorites,
});


// liste user (viktk)
// export const GET_ALL_USERS = 'GET_ALL_USERS';
// export const getAllUsersAction = () => ({
//   type: GET_ALL_USERS,
// });

// export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
// export const getAllUsersSuccessAction = (payload) => ({
//   type: GET_ALL_USERS_SUCCESS,
//   userList: payload,
// });

export const LOGOUT_ADMIN = 'LOGOUT_ADMIN';


export const USER_LIST_LOADING = 'USER_LIST_LOADING';
export const getAllUsersAction = () => ({
  type: USER_LIST_LOADING,
});


export const USER_LIST_LOAD_SUCCESS = 'USER_LIST_LOAD_SUCCESS';
export const getAllUsersSuccessAction = (myUserList) => ({
  type: USER_LIST_LOAD_SUCCESS,
  payload: myUserList,
});


export const USER_LIST_LOAD_ERROR = 'USER_LIST_LOAD_ERROR';
export const getAllUsersErrorAction = () => ({
  type: USER_LIST_LOAD_ERROR,
});


export const SEARCH_CONTACTS = 'SEARCH_CONTACTS';
export const searchUsers = (searchText) => ({
  type: SEARCH_CONTACTS,
  payload: searchText,
});
