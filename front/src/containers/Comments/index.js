import { connect } from 'react-redux';
import Comments from 'src/components/Comments';
import { fetchComments, filterComments } from 'src/store/actions/comment';

const mapStateToProps = (state) => ({
  loading: state.comment.loading,
  comments: state.comment.list,
  inputValue: state.comment.inputValue,

});

const mapDispatchToProps = (dispatch) => ({
  loadComments: () => {
    dispatch(fetchComments());
  },

  onInputValueCommentChange: (filterInputValue) => {
    console.log(filterInputValue)
    dispatch(filterComments(filterInputValue));
  }
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
