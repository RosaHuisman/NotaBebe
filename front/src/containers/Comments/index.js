import { connect } from 'react-redux';
import Comments from 'src/components/Comments';
import { fetchComments } from 'src/store/actions/comment';

const mapStateToProps = (state) => ({
  loading: state.comment.loading,
  comments: state.comment.list,

});

const mapDispatchToProps = (dispatch,) => ({
  loadComments: () => {
    dispatch(fetchComments());
  }
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
