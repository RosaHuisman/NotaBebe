import {
  OPEN_CHANGE_INFOS,
  CHANGE_VALUE,
  // CHANGE_INFOS,
  TOGGLE_CHANGE_PASSWORD,
  // CLOSE_CHANGE_INFOS,

} from '../actions';

const initialState = {
  id: 1,
  firstname: 'Tata',
  lastname: 'Toto',
  address: 'rue de la paix',
  postcode: '06360',
  city: 'Tapol',
  email: 'tata@toto.fr',
  password: 'hello',
  phone_number: '06.33.33.33.33',
  isOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CHANGE_INFOS:
      return {
        ...state,
        isOpen: true,
      };
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    // case CHANGE_INFOS: {
    //   console.log('je suis dans le cas CHANGE_INFOS')
    //   return {
    //     ...state,
    //     isOpen: false,
    //   };
    // }
    case TOGGLE_CHANGE_PASSWORD:
      return {
        ...state,
        isOpen: true,
      };
    // case CLOSE_CHANGE_INFOS:
    //   console.log('je suis dans le cas CLOSE_CHANGE_INFOS');
    //   return {
    //     ...state,
    //     isOpen: false,
    //   };
    default:
      return state;
  }
};

export default reducer;
