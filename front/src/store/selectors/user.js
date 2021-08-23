/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} users - tous les users
 * @param {string} searchedId - l'id de l'user recherché
 * @return {Object} - L'user trouvé
 */
export function findUser(users, searchedId) {
  // console.log('mes users sont: ', users)
  // console.log('id de user recherché', searchedId)
  const user = users.find((testedUser) => {
    // console.log('id de user qu on teste', testedUser.id)
    return testedUser.id === Number(searchedId);
  });
  // console.log('mon user trouvé', user)

  return user;
}
