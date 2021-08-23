import { connect } from 'react-redux';
import StaffProfile from './StaffProfile';

const mapStateToProps = (state) => ({
  filterValue: state.StaffProfile.filterValue,
});

// const mapDispatchToProps = (dispatch) => ({
//   onFilterChange: (e) => {
//     dispatch({
//       type: 'GET_RECAP',
//       newValue: e.target.value,
//       fieldKey: 'filter',
//     });
//   },
//   onGetDataFilter: () => {
//     dispatch({
//       type: ''
//     })
//   }
 
// });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
