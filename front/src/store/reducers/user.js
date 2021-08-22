import {
  OPEN_CHANGE_INFOS,
  //CHANGE_VALUE,
  CHANGE_FIELD_VALUE,
  TOGGLE_CHANGE_PASSWORD,
  CLOSE_FORM,
  INFOS_ERROR,
  PASSWORD_ERROR,
  SAVE_INFOS_USER,
  SAVE_PASSWORD_USER,
  SAVE_USERS_PARENTS,

} from '../actions';

const initialState = {
  list: [],
    isOpenInfos: false,
    isOpenPassword: false,
    
    oldpassword: 'coucou',
    newpassword: 'hello',
    confirmpassword: 'hello',
    
    changeInfosError: false,
    changePasswordError: false,
    loading: true,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case SAVE_USERS_PARENTS: {
      //console.log('je suis dans le cas SAVE_USERS_PARENTS')

      //console.log('dans le reducer', action.users_parents)
      //const { list } = action.payload;
      //console.log('action payload dans le reducer',action.payload)
      return {
        ...state,
        list: action.payload,
        //list: action.users_parents,
        loading: false, 
      };
    }   

    case OPEN_CHANGE_INFOS:
      return {
        ...state,
        isOpenInfos: !state.isOpenInfos,
      };
      case CHANGE_FIELD_VALUE: {
        return {
          ...state,
          [action.key]: action.value,
        };
      }
      case TOGGLE_CHANGE_PASSWORD: 
      return {
        ...state,
        isOpenPassword: !state.isOpenPassword,
      };
      case CLOSE_FORM:
        //console.log('je suis dans le cas CLOSE_CHANGE_INFOS')
        return {
          ...state,
          isOpenInfos: false,
          isOpenPassword: false,
        };
        case INFOS_ERROR: {
          return {
            ...state,
            loginError: true,
          };
        };
        case PASSWORD_ERROR: {
          return {
            ...state,
            loginError: true,
          };
        }; 
        case SAVE_INFOS_USER: {
          return {
            ...state, 
            changeInfosError: false,
            isOpenInfos: false,
          }
        }
        case SAVE_PASSWORD_USER: {
          return {
            ...state, 
            changePasswordError: false,
            isOpenPassword: false,
          }
        }
    default:
      return state;
  }
};

export default reducer;

