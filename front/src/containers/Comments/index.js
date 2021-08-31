import { connect } from 'react-redux';

import Comments from 'src/components/Comments';
import { fetchComments } from 'src/store/actions/comment';
import { fetchChildren } from 'src/store/actions/children';
import { findUser } from 'src/store/selectors/user';


const mapStateToProps = (state, ownProps) => ({
  loading: state.comment.loading,
  comments: state.comment.list,
  //child: findUser(state.children.list, state.comment.list.child_id),
  children: state.children.list

});

const mapDispatchToProps = (dispatch,) => ({
  loadComments: () => {
    dispatch(fetchComments());
  },

  loadChildren: () => {
    dispatch(fetchChildren());
  }

 
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
