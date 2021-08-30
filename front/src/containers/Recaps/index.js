import { connect } from 'react-redux';
import Recaps from 'src/components/Recaps';
import { fetchRecaps } from 'src/store/actions/recap';

const mapStateToProps = (state) => ({
  loading: state.recap.loading,
  recaps: state.recap.list,

  // const props = {
  //   children: findChildren()
  // }

});

const mapDispatchToProps = (dispatch,) => ({
  loadRecaps: () => {
    dispatch(fetchRecaps());
  }
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Recaps);
