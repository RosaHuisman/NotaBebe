import { connect } from 'react-redux';

import ParentProfile from 'src/components/ParentProfile';

const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  addres: state.user.addres,
  cp: state.user.cp,
  city: state.user.city,
  phone_number: state.user.phone_number,
  email: state.user.email, 

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfile);
