import { connect } from 'react-redux';
import ChildRecap from 'src/components/ChildRecap';
import {} from 'src/store/actions';

import { fetchRecaps } from 'src/store/actions/recap'
import { fetchChildren } from 'src/store/actions/children';
import { findUser } from 'src/store/selectors/user';
import { findRecap } from 'src/store/selectors/recap';


const mapStateToProps = (state, ownProps) => ({
  child: findUser(state.children.list, ownProps.match.params.id),
  loading: state.recap.loading,
  recap: findRecap(state.recap.list, ownProps.match.params.id)

});

const mapDispatchToProps = (dispatch,) => ({
  loadRecaps: () => {
    dispatch(fetchRecaps());
  },
  loadChildren: () => {
    dispatch(fetchChildren());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChildRecap);
