import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { isUserLogged } from 'src/store/selectors';
import {
  createSubmitLoginAction,
  createSetSettingsFieldValueAction,
} from 'src/store/actions';

const mapStateToProps = (state) => ({
  isLogged: isUserLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  onEmailChange: (e) => {
    dispatch(createSetSettingsFieldValueAction(e.target.value, 'email'));
  },
  onPasswordChange: (e) => {
    dispatch(createSetSettingsFieldValueAction(e.target.value, 'password'));
  },
  onSettingsSubmit: (e) => {
    e.preventDefault();
    dispatch(createSubmitLoginAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
