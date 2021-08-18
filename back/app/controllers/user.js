const userDataMapper = require("../dataMappers/user");

const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

const userController = {

    /**
     * Show the login form
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
    login: (_, response) => {
        response.json({data: user});
    },


    /**
     * Check that the login information entered by the user is correct
     * 
     * @param {Request} request 
     * @param {Response} response 
     */
    checkLogin: async (request, response) => {

        try {

            const email = request.body.email;
            const password = request.body.password;

            if (!emailValidator.validate(request.body.email)) {
                return response.json({ error: "Cet email n'est pas valide." });
            }

            const user = await userDataMapper.findOne(email);

            if (user === null) {
                response.json({ error: "Email ou mot de passe incorrect" });
                return;
            }

            // Checking if password is valid thanks to bcrypt's compare function
            if (bcrypt.compareSync(password, user.password)) {

                // Registering the user in a session
                
                if (request.session.redirectAfterLogin) {

                    response.redirect(request.session.redirectAfterLogin);
                    request.session.redirectAfterLogin = null;
                } else {

                    response.redirect('/');
                };


            } else {
                response.json({ error: "Email ou mot de passe incorrect" });
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }

    },

    /**
     * Log out of the user. We delete his session.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    logout: (request, response) => {
        request.session.destroy();
        response.redirect('/');
    },

    updatePassword: async (request, response) => {
        try {
            //   1 recuperer id ?
            const userId = Number(request.params.id);
            //   2 enregistrer ?
            const email = request.body.email;
            const password = request.body.password;
            const passwordConfirm = request.body.passwordConfirm;
            //   3 le hash
            const hash = bcrypt.hashSync(password, 10);
            //   4 le return?
            const user = await userDataMapper.updatePassword({
                password: hash,
                id: userId
            });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }

        // try {
        //     console.log('request body :', request.body);
        //     // check that the data is coherent
        //     const email = request.body.email;
        //     const password = request.body.password;
        //     const passwordConfirm = request.body.passwordConfirm;

        //     const errors = [];

        //     // checking the string's length
        //     if (password.length === 0) {
        //         errors.push("Le mot de passe est obligatoire");
        //     }

        //     // is the email a valid one?
        //     if (!email.includes('@')) {
        //         errors.push("L'email n'est pas valide");
        //     }

        //     // do the two passwords match?
        //     if (password !== passwordConfirm) {
        //         errors.push("Les mots de passe sont différents");
        //     }

        //     if (errors.length > 0) {
        //         // if there is at least one error, we want it to show up in the json response
        //         response.json({ error: errors });
        //         return;
        //     }

        //     const userId = Number(request.params.id);
        //     const hash = bcrypt.hashSync(password, 10);
        //     console.log(hash);
        //     // save the data into the database
        //     //! probleme ici
        //     const user = await userDataMapper.updatePassword({
        //         password: hash,
        //         id: userId
        //     });

        //    //! le console log de user nous donne un undefined
        //     console.log('user after all', response.result);
        //     // Connecter l'utilisateur (l'enregistrer en session)
        //     request.session.user = user;

        //     // Rediriger l'internaute sur sa page profil
        //     response.redirect('/');

        // } catch (error) {
        //     console.log(error);
        //     response.json({ error: error.message });
        // }
    },
    



























    updateUser: async (request, response) => {
        try {
            console.log(request.body);


            const address = request.body.address;
            const postcode = request.body.postcode;
            const city = request.body.city;
            const phone_number = request.body.phone_number;

            const errors = [];

            // On regarde la taille de la chaine de caractère

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

            // Enregistrer ces données en BDD
            const user = await userDataMapper.updateUser({
                address, postcode, city, phone_number
            });


        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    }


};

module.exports = userController;