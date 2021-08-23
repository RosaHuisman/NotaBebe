import { connect } from 'react-redux';
import { isUserLogged } from 'src/store/selectors/loggedPseudo';
import { fetchUsersParents } from 'src/store/actions';

import {fetchUsersParents} from 'src/store/actions'

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: isUserLogged(state),
  children: state.user.children,
  //user: state.user,
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch) => ({

  loadUsersParents: () => {
    dispatch(fetchUsersParents())
    },
 
})
  

// const mapDispatchToProps = (dispatch) => ({

//   loadUsersParents: () => {
//     dispatch(fetchUsersParents());
//   },
// });

export default connect(mapStateToProps)(App);
