import { connect } from 'react-redux';
import { isUserLogged } from 'src/store/selectors';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: isUserLogged(state),
  children: state.user.children,
  user: state.user,

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
