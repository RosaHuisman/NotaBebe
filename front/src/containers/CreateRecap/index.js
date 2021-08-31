import { connect } from 'react-redux';
import CreateRecap from 'src/components/CreateRecap';
import { showFieldNap, changeValueText, changeMood, changeTimeNap } from 'src/store/actions/recap';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.recap.isOpen,
  //value: state.recap[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openNewNap: () => {
    dispatch(showFieldNap());
  },

  onChangeValue: (value, name) => {
    dispatch(changeValueText(name, value));
  },


  moodSelected: (value, name) => {
    dispatch(changeMood(name, value));
  },

  timeNapSelected: (value, name) => {
    dispatch(changeTimeNap(name, value));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecap);
