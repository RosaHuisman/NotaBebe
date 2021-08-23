import { connect } from 'react-redux';
import FilterRecaps from 'src/components/FilterRecaps';

import {
  fetchRecaps,
} from 'src/store/actions';


const mapStateToProps = (state, ownProps) => {
  // console.log('LIST', state.user.list)

  const props = {
    oldpassword: state.user.oldpassword,
    isOpenInfos: state.user.isOpenInfos,
    isOpenPassword: state.user.isOpenPassword,
    newpassword: state.user.newpassword,
    confirmpassword: state.user.confirmpassword,
    value: state[ownProps.name],
    hasInfosError: state.user.changeInfosError,
    hasPasswordError: state.user.changePasswordError,
    user: findUser(state.user.list, ownProps.match.params.id),
    // child: findChildren(state.children.list, ownProps.id),
  };
  return props;
};

const mapDispatchToProps = (dispatch) => ({

  loadUsersParents: () => {
    dispatch(fetchUsersParents());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfile);
