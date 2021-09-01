/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} recaps - tous les recaps
 * @param {string} childId - l'id de l'enfant dont il faut trouver le (dernier!) recap
 * @return {Object} - Le recap trouvé
 */
 export function findRecap(recaps, childId) {
   console.log(recaps)
   console.log(childId)
  const recap = recaps.filter((testedRecap) => {
    return testedRecap.child_id === Number(childId);
  });
  console.log(recap)
  return recap;
}
