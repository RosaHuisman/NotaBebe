const userDataMapper = require("../dataMappers/user");

const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

const userController = {

    // /**
    //  * Show the login form
    //  * 
    //  * @param {Request} request 
    //  * @param {Response} response 
    //  */
    // login: (_, response) => {
    //     response.json({ data: user });
    // },


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
     * @param {request} request 
     * @param {response} response 
     */
    logout: (request, response) => {
        request.session.destroy();
        response.redirect('/');
    },

    /**
     * Updating the user password (+ hashing it)
     * @param {request} request 
     * @param {response} response 
     */
    updatePassword: async (request, response) => {
        
        try {
            // check that the data is coherent
            const password = request.body.password;

            const errors = [];

            // checking string length
            if (password.length === 0) {
                errors.push("Le mot de passe est obligatoire");
            }

            if (errors.length > 0) {
                // if there is at least one error, we want it to show up in the json response
                response.json({ error: errors });
                return;
            }

            const userId = Number(request.params.id);
            const hash = bcrypt.hashSync(password, 10);

            // save the data into the database
            const user = await userDataMapper.updatePassword(hash, userId);

            // connect the user (save into a session)
            request.session.user = user;

            // redirect on /
            response.redirect('/');

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Updating user info
     * @param {request} request 
     * @param {response} response 
     */
    updateUser: async (request, response, next) => {
        try {

            const userId = Number(request.params.id);
            const user = await userDataMapper.findById(userId);

            if(!user) {
                return next();
            }

            // console.log('req body', request.body);
            const address = request.body.address;
            const postcode = request.body.postcode;
            const city = request.body.city;
            const phone_number = request.body.phone_number;

            // Enregistrer ces données en BDD
            const updatedUser = await userDataMapper.updateUser(user);
            console.log(updatedUser);

            // Connecter l'utilisateur (l'enregistrer en session)
            request.session.user = updatedUser;

            // Rediriger l'internaute sur sa page profil
            // response.redirect('/');
            response.json({ ...updatedUser });


        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },
};

module.exports = userController;