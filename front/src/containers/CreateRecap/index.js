import { connect } from 'react-redux';
import CreateRecap from 'src/components/CreateRecap';
import { changeValueText, changeMood, changeTimeNap, submitFormCreateRecap, changeDate, addFieldNap, removeFieldNap } from 'src/store/actions/recap';

const mapStateToProps = (state, ownProps) => ({
  napFormLimit: state.recap.napFormLimit,
  napFormList: state.recap.napFormList,
  isOpen: state.recap.isOpen,
  //value: state.recap[ownProps.name],
  save: state.recap.save,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitCreateRecap: (child_id) => {
    dispatch(submitFormCreateRecap(child_id));
  },
  
  addNewNap: () => {
    dispatch(addFieldNap());
  },
  
  removeLastNap: () => {
    dispatch(removeFieldNap());
  },

  onChangeValue: (value, name) => {
    dispatch(changeValueText(name, value));
  },

  moodSelected: (value, name) => {
    dispatch(changeMood(name, value));
  },

  timeNapSelected: (value, name) => {
    console.log(value)
    dispatch(changeTimeNap(name, value));
  },

  // timeNapStartSelected: (value, name) => {
  //   dispatch(changeTimeNapStart(name, value));
  // },

  // timeNapEndSelected: (value, name) => {
  //   dispatch(changeTimeNapEnd(name, value));
  // },

  dateSelected: (date, name) => {
    dispatch(changeDate(date, name));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecap);
