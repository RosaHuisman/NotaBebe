//! à remettre dans notre user controller dans la méthode update user

const errors = [];

// checking string length

if (address.length === 0) {
    errors.push("L'adresse est obligatoire'");
}
if (postcode.length === 0) {
    errors.push("Le code postal est obligatoire");
}
if (city.length === 0) {
    errors.push("La ville est obligatoire");
}

if (phone_number.length === 0) {
    errors.push("Le numéro de téléphone est obligatoire");
}

if (errors.length > 0) {
    // En cas d'erreurs détectées, on fait un rendu de la vue register
    // En lui transmettant notre tableau d'erreur.
    response.json({ error: errors });
    return;
}