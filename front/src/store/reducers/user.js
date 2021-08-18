import {
  CHANGE_INFOS,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INFOS:
      console.log('je suis dans le cas CHANGE_INFOS')
      return {
        ...state,
        change_infos: true,
      };
    default:
      return state;
  }
};

export default reducer;

