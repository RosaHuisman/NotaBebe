/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} users - tous les users
 * @param {string} searchNewValue - valeur du terme recherché
 * @return {Object} - L'user trouvé
 */
export function allUser(users, searchNewValue) {
  const userList = users.filter((userData) => {
    if (searchNewValue === '') {
      return userData;
    } if (
      userData.first_name.toLowerCase().includes(searchNewValue.toLowerCase())
      || userData.last_name.toLowerCase().includes(searchNewValue.toLowerCase())
      || userData.email.toLowerCase().includes(searchNewValue.toLowerCase())
      || userData.phone_number.toLowerCase().includes(searchNewValue.toLowerCase())
    ) {
      return userData;
    }
  });

  return userList;
}

// export function allUser(users) {
//   const userList = users.filter(user);

//   return userList;
// }
