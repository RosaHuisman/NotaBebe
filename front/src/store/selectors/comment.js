/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} comments - tous les comments
 * @param {string} childId - l'id de l'enfant dont il faut trouver les commentaires
 * @return {Object} - Les commentaires trouvés
 */
 export function findComments(comments, childId) {
  const allComments = comments.filter((testedComment) => {
    return testedComment.child_id === Number(childId);
  });
  //console.log(comments)
  return allComments;
}

