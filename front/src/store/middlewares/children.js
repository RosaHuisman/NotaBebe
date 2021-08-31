import { 
  FETCH_CHILDREN, 
  saveChildren 
} from 'src/store/actions/children';

import axios from 'axios';
import api from './utils/api';

const children = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CHILDREN: {
      //console.log('je suis dans le cas FETCH CHILDREN')
      const fetchData = async () => {
        try {
          const response = await api.get('profile/admin/children');
          //console.log('reponse du fetch : ', response.data)
          const actionsaveChildren = saveChildren(response.data);
          store.dispatch(actionsaveChildren);
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
}

export default children;
