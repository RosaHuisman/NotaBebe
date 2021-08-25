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

}) => {
  const data = useLocation();

  // const child = data.state.child;
  // console.log('mon enfant', data.state.child);

  // const child = () => {
  //   return data.state.child
  // }

  // console.log(child)

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
              child={data.state.child}
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
              user={user}
              child={data.state.child}
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
