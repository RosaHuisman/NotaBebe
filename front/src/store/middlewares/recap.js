import { 
  FETCH_RECAPS, 
  saveRecaps 
} from 'src/store/actions/recap';

import axios from 'axios';
import api from './utils/api';

const recap = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECAPS: {
      //console.log('je suis dans le cas FETCH RECAPS')
      const fetchData = async () => {
        try {
          const response = await api.get('profile/staff/allrecaps');
          //console.log('reponse du fetch : ', response.data)
          const actionsaveRecaps = saveRecaps(response.data);
          store.dispatch(actionsaveRecaps);
        }
        catch (error) {
          console.log('il y a eu une erreur', error);
        }
      };

      fetchData();
      break;
    }

    default:
      next(action);
  };
};

export default recap;
