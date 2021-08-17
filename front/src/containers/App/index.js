import { connect } from 'react-redux';
import { isUserLogged } from 'src/store/selectors';

import App from 'src/components/App';


const mapStateToProps = (state) => ({
  // loading: state.recipes.isLoading,
  // isLogged: state.userlogin.isLogged,
  isLogged: isUserLogged(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
