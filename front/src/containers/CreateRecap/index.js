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

  onChangeValue: (value) => {
    dispatch(changeTextValue(ownProps.name, value));
  },

  childSelected: (value) => {
    dispatch(changeChild(ownProps.name, value));
  },

  moodSelected: (value) => {
    dispatch(changeMood(ownProps.name, value));
  },

  timeNapSelected: (value) => {
    dispatch(changeTimeNap(ownProps.name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecap);
