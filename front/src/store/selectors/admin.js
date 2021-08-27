/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} users - tous les users
 * @param {string} searchNewValue - valeur du terme recherché
 * @return {Object} - L'user trouvé
 */
export function allUser(users, searchNewValue) {
  const userList = users.filter((user) => {
    if (searchNewValue === '') {
      return user;
    } if (
      user.first_name.toLowerCase().includes(searchNewValue.toLowerCase())
      || user.last_name.toLowerCase().includes(searchNewValue.toLowerCase())
      || user.email.toLowerCase().includes(searchNewValue.toLowerCase())
      || user.phone_number.toLowerCase().includes(searchNewValue.toLowerCase())
      || user.role_id.toLowerCase().includes(searchNewValue.toLowerCase())
    ) {
      return user;
    }
  });

  return userList;
}
