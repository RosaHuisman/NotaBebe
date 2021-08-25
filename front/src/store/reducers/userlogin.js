// import {
//   CHANGE_VALUE_LOGIN,
//   SAVE_USER_LOGIN,
//   LOGOUT,
//   LOGIN,
//   LOGIN_ERROR,
// } from 'src/store/actions';

// const initialState = {
//   email: '',
//   password: '',
//   pseudo: null,
//   logged: false,
//   token: null,
//   loading: true,
//   isError: false,
// };

// const reducer = (oldState = initialState, action = {}) => {
//   switch (action.type) {
//     case CHANGE_VALUE_LOGIN:
//       return {
//         ...oldState,
//         [action.key]: action.value,
//       };
//     case SAVE_USER_LOGIN: {
//       const { pseudo, logged, token } = action.payload;
//       return {
//         ...oldState,
//         pseudo,
//         logged,
//         token,
//         email: '',
//         password: '',
//         isError: false,
//         loading: false,
//       };
//     }
//     case LOGIN_ERROR: {
//       return {
//         ...oldState,
//         isError: true,
//       };
//     }
//     // case SET_SETTINGS_FIELD_VALUE: {
//     //   return {
//     //     ...oldState,
//     //     [action.fieldKey]: action.newValue,
//     //   };
//     // }
//     case LOGOUT: {
//       localStorage.removeItem('token');
//       return {
//         ...oldState,
//       };
//     }
//     default:
//       return oldState;
//   }
// };

// export default reducer;
