import { connect } from 'react-redux';
import { isUserLogged } from 'src/store/selectors/loggedPseudo';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // isLogged: isUserLogged(state),
  logged: isUserLogged(state),
  loading: state.user.loading,
});

export default connect(mapStateToProps)(App);
