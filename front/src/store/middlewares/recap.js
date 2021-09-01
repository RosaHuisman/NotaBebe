import { 
  FETCH_RECAPS, 
  saveRecaps,
  CREATE_RECAP,
  saveRecap 
} from 'src/store/actions/recap';

import axios from 'axios';
import api from './utils/api';

const recap = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECAPS: {
      const fetchData = async () => {
        try {
          const response = await api.get('profile/staff/allrecaps');
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
    case CREATE_RECAP: {
      const state = store.getState();
      const childId = action.child_id;

     axios.post(`http://notabebe-back.herokuapp.com/profile/staff/child/recap`, {
       child_id: childId,
       date: state.recap.date,
       mood: state.recap.mood,
       naps: [
         {
         start_time: state.recap.start_nap_1,
         end_time: state.recap.end_nap_1,
         comment: state.recap.comment_1,
       },
       {
        start_time: state.recap.start_nap_2,
        end_time: state.recap.end_nap_2,
        comment: state.recap.comment_2,
        }
      
      ],
       meals: [{
         time: state.recap.time,
         comment: state.recap.meal,
       }]

     })
       .then((response) => {
         console.log(response.data)
         const actionsaveRecap = saveRecap(response.data);
         store.dispatch(actionsaveRecap);
       })
       .catch((error) => {
         console.log('il y a eu une erreur dans le post comment', error);
         // store.dispatch(postCommentError());
       });
     break;
   }

    default:
      next(action);
};
}

export default recap;
