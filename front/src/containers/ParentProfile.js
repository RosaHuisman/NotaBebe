import { connect } from 'react-redux';
import ParentProfile from 'src/components/ParentProfile';
import { changeInfos } from 'src/store/actions';


const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  lastname: state.user.lastname,
  address: state.user.address,
  cp: state.user.cp,
  city: state.user.city,
  phone_number: state.user.phone_number,
  email: state.user.email,
  change_infos: state.user.change_infos, 

});

const mapDispatchToProps = (dispatch) => ({
  changeUserInfos: () => {
    //console.log(e)
    //e.preventDefault();
  //console.log('coucou je suis la')
  dispatch(changeInfos());
}    
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfile);
