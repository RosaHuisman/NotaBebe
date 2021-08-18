import {
  CHANGE_INFOS,
  CHANGE_VALUE,
  TOGGLE_CHANGE_PASSWORD

} from '../actions';

const initialState = {
    id: 1,
    firstname: 'Tata',
    lastname: 'Toto',
    address: 'rue de la paix',
    cp: '06360',
    city: 'Tapol',
    email: 'tata@toto.fr',
    password: 'hello',
    phone_number: '06.33.33.33.33',
    change_infos: false,
    change_password: false, 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INFOS:
      return {
        ...state,
        change_infos: true,
      };
      case CHANGE_VALUE: {
        console.log('je suis dans le cas CHANGE_VALUE')
        return {
          ...state,
          [action.key]: action.value,
        };
      };
      case TOGGLE_CHANGE_PASSWORD: 
      return {
        ...state,
        change_password: true,
      }
    default:
      return state;
  }
};

export default reducer;

