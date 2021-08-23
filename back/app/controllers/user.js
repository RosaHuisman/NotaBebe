const userDataMapper = require("../dataMappers/user");

const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

const userController = {

    getAllUsers: async (_, response) => {
        try {
            const data = await userDataMapper.findAll();
            response.json(data);

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }

    },

    getAllParents: async (_, response) => {
        try {
            const data = await userDataMapper.findAllParents();
            response.json(data);

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    getParentById: async (request, response) => {
        try {
            const parentId = Number(request.params.id);
            console.log(parentId);
            const data = await userDataMapper.findParentById(parentId);
            // console.log(data);
            // response.json(data);


            const datatest = await userDataMapper.findChildrenByParent(parentId);
            response.json(datatest);


        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    // méthode pour la route pour l'affichage du profil enfant après le clic depuis le profil parent (donc en params : parentId et childId) ?

    getAllStaff: async (_, response) => {
        try {
            const data = await userDataMapper.findAllStaff();
            response.json(data);

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }

    },

    getStaffById: async (request, response) => {
        try {
            const staffId = Number(request.params.id);
            const data = await userDataMapper.findStaffById(staffId);
            response.json(data);

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    getAllChildren: async (_, response) => {
        try {
            const data = await userDataMapper.findAllChildren();
            response.json(data);

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    // getChildrenByParent: async (_, response) => {
    //     try {
    //         const data = await userDataMapper.findChildrenByParent(parentId);
    //         response.json(data);
    //     } catch (error) {
    //         console.log(error);
    //         response.json({ error: error.message });
    //     }
    // },

    /**
     * Check that the login information entered by the user is correct and validate login form
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
            };


            // Checking if password is valid thanks to bcrypt's compare function
            const pwResult = bcrypt.compareSync(password, user.password);

            if (pwResult) {

                response.json('le mot de passe est correct')

            } else {
                response.json({ error: "mot de passe incorrect" });
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }

    },

    //? à voir comment tester le logout

    /**
     * Log out of the user. We delete his session.
     * 
     * @param {request} request 
     * @param {response} response 
     */
    logout: (request, response) => {
        request.session.destroy();
        console.log('coucou je suis delogu');
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

            // redirect to /
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

            if (!user) {
                return next();
            }

            const newData = request.body;

            // save the new data in the database
            const updatedUser = await userDataMapper.updateUser({ ...newData }, userId);
            //console.log(updatedUser);

            // save the newly updated user in a session
            request.session.user = updatedUser;

            // response.redirect('/');
            response.json({ updatedUser });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },
};

module.exports = userController;