import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeFieldValue } from 'src/store/actions';

const mapStateToProps = (state, ownProps) => ({
  value: state.user[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputValue: (value) => {
    const action = changeFieldValue(ownProps.name, value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
