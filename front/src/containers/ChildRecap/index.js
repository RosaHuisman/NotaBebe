import { connect } from 'react-redux';
import ChildRecap from 'src/components/ChildRecap';

import { fetchRecapsByChildId } from 'src/store/actions/recap'
import { commentSendNo } from 'src/store/actions/comment'


const mapStateToProps = (state, ownProps) => ({
  //parent: findUser(state.user.list, ownProps.match.params.parent_id),
  loading: state.recap.loading,
  childRecaps: state.recap.list,
  parent: state.user.parent,
});

const mapDispatchToProps = (dispatch,) => ({
  
  /* loadRecaps: (parentId, childId) => {
    console.log('je fais le loadrecaps')
    dispatch(fetchRecapsByChildId(parentId, childId));
  }, */
  
  closeCommentSend: () => {
    dispatch(commentSendNo());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ChildRecap);
