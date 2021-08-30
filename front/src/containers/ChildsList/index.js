import { connect } from 'react-redux';
import ChildsList from 'src/components/ChildsList';
import { fetchChildren } from 'src/store/actions/children';

const mapStateToProps = (state) => ({
  loading: state.children.loading,
  children: state.children.list,
});

const mapDispatchToProps = (dispatch) => ({
  
  loadChildren: () => {
    console.log('coucou')
    dispatch(fetchChildren());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ChildsList);
