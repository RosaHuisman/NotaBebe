const bcrypt = require('bcrypt');

const adminDataMapper = require('../dataMappers/admin');


const adminController = {


    /**
     * Send signup form
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
    register: (_, response) => {
        response.json({ data: '??'});
    },

    /**
     * Recording of data received by the login form
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
    registerSave: async (request, response) => {

        try {
            console.log(request.body);
            // Vérifier la cohérences des données
            const firstname = request.body.firstname;
            const lastname = request.body.lastname;
            const email = request.body.email;
            const password = request.body.password;
            const passwordConfirm = request.body.passwordConfirm;

            const errors = [];
            console.log(firstname.length);

            // On regarde la taille de la chaine de caractère
            if (firstname.length === 0) {
                // Si elle est à 0, on rajoute une error à notre tableau
                errors.push("Le prénom est obligatoire");
            }

            if (lastname.length === 0) {
                errors.push("Le nom de famille est obligatoire");
            }

            if (password.length === 0) {
                errors.push("Le mot de passe est obligatoire");
            }

            // email valide ?
            if (!email.includes('@')) {
                errors.push("L'email n'est pas valide");
            }

            // mots de passes identiques ?
            if (password !== passwordConfirm) {
                errors.push("Les mots de passe sont différents");
            }

            // On compte le nombre d'user avec l'email fourni
            const emailDejaPresent = await userDataMapper.countEmail(email);


            // Si il est > 0
            if (emailDejaPresent > 0) {
                // On rajoute une erreur
                errors.push("Un compte existe déjà avec cet email");
            }

            if (errors.length > 0) {
                // En cas d'erreurs détectées, on fait un rendu de la vue register
                // En lui transmettant notre tableau d'erreur.
                response.render('signup', {
                    error: errors
                });
                return;
            }

            const hash = bcrypt.hashSync(password, 10);

            // Enregistrer ces données en BDD
            const user = await userDataMapper.insertOne({
                firstname,
                lastname,
                email,
                password: hash
            });

            // Connecter l'utilisateur (l'enregistrer en session)
            request.session.user = user;

            // Rediriger l'internaute sur sa page profil
            response.redirect('/');

        } catch (error) {
            console.log(error);
            response.render('signup', {
                error: error.message
            });
        }

    }


}

module.exports = adminController;