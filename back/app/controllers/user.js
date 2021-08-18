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
                response.json({ error: "Email ou mot de passe incorect" });
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
                response.json({ error: "Email ou mot de passe incorect" });
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
    }
};

module.exports = userController;