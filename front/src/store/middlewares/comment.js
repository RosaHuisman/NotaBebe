import { 
  FETCH_COMMENTS, 
  saveComments 
} from 'src/store/actions/comment';

import axios from 'axios';
import api from './utils/api';

const comment = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COMMENTS: {
      console.log('je suis dans le cas FETCH COMMENTS')
      const fetchData = async () => {
        try {
          const response = await api.get('profile/staff/comments');
          console.log('reponse du fetch : ', response.data)
          const actionsaveComments = saveComments(response.data);
          store.dispatch(actionsaveComments);
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

export default comment;
