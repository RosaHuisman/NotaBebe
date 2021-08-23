import { connect } from 'react-redux';
import CreateRecap from 'src/components/CreateRecap';
import { showFieldNap, changeTextValue } from 'src/store/actions';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.recap.isOpen,
  // name: state.recap[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openNewNap: () => {
    dispatch(showFieldNap());
  },

  onChangeValue: (value) => {
    dispatch(changeTextValue(ownProps.name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecap);
