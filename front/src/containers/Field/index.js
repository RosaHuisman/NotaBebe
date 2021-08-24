import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeFieldValue, fetchUsersParents } from 'src/store/actions';

// import { findUser } from 'src/store/selectors/user';

const mapStateToProps = (state, ownProps) => ({
  value: state.user.name,
  // value: findUser(state.user.list, ownProps.match.params.id)[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputValue: (value) => {
    const action = changeFieldValue(ownProps.name, value);
    dispatch(action);
  },

  // loadUsersParents: () => {
  //   dispatch(fetchUsersParents())
  //   },

});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
