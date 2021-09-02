const userDataMapper = require("../dataMappers/user");

const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = process.env.SECRET_KEY;

const userController = {

    /**
     * Getting all users
     * @param {*} _ 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    getAllUsers: async (_, response, next) => {
        try {
            const data = await userDataMapper.findAll();

            if (data) {
                response.json(data);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }

    },

    /**
     * Getting all parents
     * @param {*} _ 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    getAllParents: async (_, response, next) => {
        try {
            const data = await userDataMapper.findAllParents();

            if (data) {
                response.json(data);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Getting a parent by their id
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    getParentById: async (request, response, next) => {
        try {
            const parentId = Number(request.params.id);

            const data = await userDataMapper.findChildrenByParent(parentId);

            if (data) {
                response.json(data);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Get a child by their parent
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    getChildFromParent: async (request, response, next) => {
        try {
            const parentId = Number(request.params.id);
            const childId = Number(request.params.childId);

            const data = await userDataMapper.findChildFromParent(parentId, childId);

            if (data) {
                response.json(data);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Get all staff members
     * @param {*} _ 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    getAllStaff: async (_, response, next) => {
        try {
            const data = await userDataMapper.findAllStaff();

            if (data) {
                response.json(data);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }

    },

    /**
     * Get a staff member by their id
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    getStaffById: async (request, response, next) => {
        try {
            const staffId = Number(request.params.id);
            const data = await userDataMapper.findStaffById(staffId);

            if (data) {
                response.json(data);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Get all children
     * @param {*} _ 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    getAllChildren: async (_, response, next) => {
        try {
            const data = await userDataMapper.findAllChildren();

            if (data) {
                response.json(data);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Checking that the login information entered by the user is correct and validate login form
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

            console.log("password", password);
            console.log("user.password", user.password);
            // Checking if password is valid thanks to bcrypt's compare function
            const pwResult = bcrypt.compareSync(password, user.password);


            // if the password is correct 
            if (pwResult) {

                if (user) {

                    const jwtContent = { userId: user.id, roleId: user.role_id, firstName: user.first_name, lastName: user.last_name };

                    const jwtOptions = {
                        algorithm: 'HS256',
                        expiresIn: '300s'
                    };
                    response.json({
                        logged: true,
                        email: user.email,

                        firstName: user.first_name,
                        lastName: user.last_name,
                        roleId: user.role_id,
                        token: jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions),
                    });
                } else {
                    response.status(401).json(`401 unauthorized`);
                }

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
     * Log out of the user, deleting their session
     * 
     * @param {request} request 
     * @param {response} response 
     */
    logout: (request, response) => {
        request.session.destroy();
        response.redirect('/');
    },

    /**
     * Checking old password and updating user password (+ hashing it)
     * @param {request} request 
     * @param {response} response 
     */
    updatePassword: async (request, response) => {
        try {
            // check that the data is coherent
            const userId = Number(request.params.id);


            const oldPassword = request.body.oldPassword;

            const user = await userDataMapper.findById(userId);

            const compareHash = bcrypt.compareSync(oldPassword, user.password);

            if (compareHash) {

                const newPassword = request.body.password;

                const errors = [];

                if (oldPassword === newPassword) {
                    errors.push("Le nouveau mot de passe doit être différent de l'ancien.")
                }
                // checking string length
                if (newPassword.length === 0) {
                    errors.push("Le mot de passe est obligatoire");
                }

                if (errors.length > 0) {
                    // if there is at least one error, we want it to show up in the json response
                    response.json({ error: errors });
                    return;
                }

                const hash = bcrypt.hashSync(newPassword, 10);

                // save the data into the database
                const user = await userDataMapper.updatePassword(hash, userId);

                // connect the user (save into a session)
                request.session.user = user;

                // redirect to /
                response.redirect('/');

            } else {
                response.json("L'ancien mot de passe est invalide. Veuillez réessayer.");
            }

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

            // save the newly updated user in a session
            request.session.user = updatedUser;

            // response.redirect('/');
            response.json({ updatedUser });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Modifying a child
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    modifyChild: async (request, response, next) => {
        try {
            const parentId = Number(request.params.id);

            const childId = Number(request.params.childId);


            const child = await userDataMapper.findChildFromParent(parentId, childId);

            if (!child) {
                return next();
            }

            const newData = request.body;

            const updatedChild = await userDataMapper.modifyChild({ ...newData }, childId);

            response.json({ updatedChild });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    }
};

module.exports = userController;