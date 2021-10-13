import { connect } from 'react-redux';
import HeaderStaff from 'src/components/StaffProfile/HeaderStaff';
import { logout } from 'src/store/actions/authActions';
import { emptyStateChildren } from 'src/store/actions/children'
import { emptyStateRecap } from 'src/store/actions/recap'
import { emptyStateComment } from 'src/store/actions/comment'


// transforme le state en props
const mapStateToProps = (state) => ({
  userId: state.auth.userId,
});

// transforme la fonction dispatch en props
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
    dispatch(emptyStateChildren());
    dispatch(emptyStateRecap());
    dispatch(emptyStateComment())

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderStaff);
