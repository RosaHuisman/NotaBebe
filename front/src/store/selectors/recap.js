/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} recaps - tous les recaps
 * @param {string} childId - l'id de l'enfant dont il faut trouver le (dernier!) recap
 * @return {Object} - Le recap trouvé
 */
 export function findRecap(recaps, childId) {
  const recap = recaps.find((testedRecap) => {
    return testedRecap.child_id === Number(childId);
  });
  
  
  // const recap1 = recap.splice(-1,1)
  // const recap2 = recap.splice(-2,1)

  // Array.prototype.push.apply(recap1, recap2); 

  //  const recapsconcacted = recap1.concat(recap2)
  return recap;
}
