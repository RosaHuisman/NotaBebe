import { connect } from 'react-redux';
import ForgotPassword from 'src/components/ForgotPassword';

const mapStateToProps = (state) => ({
  email: state.userlogin.email,
});

const mapDispatchToProps = (dispatch) => ({
  onEmailForgotChange: (e) => {
    dispatch({
      type: 'SET_SETTINGS_FIELD_VALUE',
      newValue: e.target.value,
      fieldKey: 'email',
    });
  },
  handleForgot: (e) => {
    e.preventDefault();
    dispatch({
      type: 'SUBMIT_EMAIL',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
