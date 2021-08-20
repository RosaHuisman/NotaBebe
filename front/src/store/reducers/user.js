import {
  OPEN_CHANGE_INFOS,
  //CHANGE_VALUE,
  CHANGE_FIELD_VALUE,
  TOGGLE_CHANGE_PASSWORD,
  CLOSE_FORM,
  INFOS_ERROR,
  PASSWORD_ERROR,
  SAVE_INFOS_USER,
  SAVE_PASSWORD_USER

} from '../actions';

const initialState = {
    id: 1,
    firstname: 'Tata',
    lastname: 'Toto',
    address: '36 rue de la paix',
    postcode: '06360',
    city: 'Tapol',
    email: 'tata@toto.fr',
    password: 'hello',
    phone_number: '06.33.33.33.33',
    isOpenInfos: false,
    isOpenPassword: false,
    oldpassword: '',
    newpassword: '',
    confirmpassword: '',
    changeInfosError: false,
    changePasswordError: false,
    children: [
      {
      id: 1,
      firstname: 'Georges',
      lastname: 'Toupet',
      birthdate: '14/06/2019',
      birthplace: 'Tourcoing',
      gender: 'Masculin',
      allergy: ['poisson', 'viande', 'oeuf', 'lait'],
        },
        {
      id: 2,
      firstname: 'Georgette',
      lastname: 'Toupet',
      birthdate: '09/11/2021',
      birthplace: 'Tourcoing',
      gender: 'Féminin',
      allergy: [],
            }
      ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        console.log('je suis dans le cas CLOSE_CHANGE_INFOS')
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

