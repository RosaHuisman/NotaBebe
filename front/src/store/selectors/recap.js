/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} recaps - tous les recaps
 * @param {string} childId - l'id de l'enfant dont il faut trouver le (dernier!) recap
 * @return {Object} - Le recap trouvé
 */
 export function findRecap(recaps, childId) {
  const recap = recaps.filter((testedRecap) => {
    // console.log('id de user qu on teste', testedUser.id)
    return testedRecap.child_id === Number(childId);
  });
  
  console.log(recap)
  
  // const recap1 = recap.splice(-1,1)
  // console.log('recap1', recap1)
  // const recap2 = recap.splice(-2,1)
  //  console.log('recap2', recap2)

  // Array.prototype.push.apply(recap1, recap2); 
  // console.log(recap1)

  //  const recapsconcacted = recap1.concat(recap2)
  //  console.log('recap12', recapsconcacted)
  return recap;
}
