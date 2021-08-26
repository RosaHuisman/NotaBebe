import { connect } from 'react-redux';
import CreateRecap from 'src/components/CreateRecap';
import { showFieldNap, changeTextValue, changeChild, changeMood, changeTimeNap } from 'src/store/actions';

const mapStateToProps = (state) => ({
  isOpen: state.recap.isOpen,
  // name: state.recap[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openNewNap: () => {
    dispatch(showFieldNap());
  },

  onChangeValue: (value, name) => {
    // dispatch(changeTextValue(ownProps.name, value));
    dispatch(changeTextValue(name, value));
  },

  childSelected: (value, name) => {
    dispatch(changeChild(name, value));
  },

  moodSelected: (value, name) => {
    dispatch(changeMood(name, value));
  },

  timeNapSelected: (value, name) => {
    dispatch(changeTimeNap(name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecap);
