import React from 'react';
import PropTypes from 'prop-types';

import { useLocation, Link } from 'react-router-dom';

import Header from 'src/components/Header';
import ChildRecap from 'src/components/ChildRecap';
import ChildInfos from './ChildInfos';
import ChangeChildInfosForm from './ChangeChildInfosForm';
import Comment from './Comment';

import './styles.scss';

const ChildProfile = ({
  user,
  child,
  openUserInfos,
  isOpenInfos,
  closeForm,
  handleChangeInfos,
  submitComment,
  comment,
  commentSend,
  onChangeTextValue,
  
  // loadUsersParents,

}) => {

  // useEffect(() => {
  //   //console.log('je suis dans le useEffect')
  //   loadUsersParents();
  // }, []);

  const data = useLocation();

  // const child = data.state.child;
  // console.log('mon enfant', data.state.child);

  // const child = () => {
  //   return data.state.child
  // }
  
  // we retrieve the data of the parent and the child through Link of Children in ParentProfile
  // we could use this informations for the parent and the child
  // I called it parent but the child's information is available too

  console.log('user dans index profil enfant', data.state.parent)

  const handleOnClickChangeInfosButton = (e) => {
    e.preventDefault();
    openUserInfos();
  };

  return (
     
    <>
      <header className="header">
        <Header />
      </header>
      <div className="childprofile">

        {!isOpenInfos ? (
          <>
            <ChildInfos
              openUserInfos={openUserInfos}
              parent={data.state.parent}
            />

            <button
              type="button"
              className="childprofile__button"
              onClick={handleOnClickChangeInfosButton}
            >
              Modifier les informations
            </button>
          </>
        ) : (
          <>
            <ChangeChildInfosForm
              closeForm={closeForm}
              handleChangeInfos={handleChangeInfos}
              //user={user}
              parent={data.state.parent}
            />
          </>
        )}

        <Link
          to="/profile/parent/1/child/1/recap"
        >
          <button
            type="button"
            className="childprofile__button childprofile__button__recap"
          >
            Récap du jour
          </button>
        </Link>

        <Comment
          submitComment={submitComment}
          commentSend={commentSend}
          onChangeTextValue={onChangeTextValue}
        />

      </div>
    </>
  );
};

// if (user.length === 1) {
//   return (
//     <>

//       <header className="header">
//         <Header />
//       </header>
//       <div className="childprofile">

//         {!isOpenInfos ? (
//           <>
//             <ChildInfos
//               openUserInfos={openUserInfos}
//               user={user}
//             />

//             <button
//               type="button"
//               className="childprofile__button"
//               onClick={handleOnClickChangeInfosButton}
//             >
//               Modifier les informations
//             </button>
//           </>
//         ) : (
//           <>
//             <ChangeChildInfosForm
//               closeForm={closeForm}
//               handleChangeInfos={handleChangeInfos}
//               user={user}
//             />
//           </>
//         )}

//         <Link
//           to="/profile/parent/1/child/1/recap"
//         >
//           <button
//             type="button"
//             className="childprofile__button childprofile__button__recap"
//           >
//             Récap du jour
//           </button>
//         </Link>

//         <Comment
//           submitComment={submitComment}
//           commentSend={commentSend}
//           onChangeTextValue={onChangeTextValue}
//         />

//       </div>

//     </>
//   );
// }
// else if (user.length === 2) {

// }

// };

ChildProfile.propTypes = {

};

ChildProfile.defaultProps = {
};

export default ChildProfile;
