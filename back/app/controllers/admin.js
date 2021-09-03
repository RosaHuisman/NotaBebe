const bcrypt = require('bcrypt');

const adminDataMapper = require('../dataMappers/admin');
const userDataMapper = require('../dataMappers/user');

const adminController = {

    /**
     * Adding a user
     * @param {request} request - 
     * @param {response} response - 
     * @param {next} next - 
     * @returns 
     */
    addUser: async (request, response, next) => {
        try {

            const password = request.body.password;

            const hash = bcrypt.hashSync(password, 10);

            const newUser = await adminDataMapper.insertOne({
                ...request.body,
                password: hash
            });

            if (!newUser) {
                return next();
            }

            response.json({ data: newUser });

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Deleting a user
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    deleteUser: async (request, response, next) => {
        try {

            const id = Number(request.params.id);

            if (isNaN(id)) {
                return next();
            }

            const result = await adminDataMapper.deleteUser(id);

            if (result.rowCount > 0) {
                response.json('User bien supprimé');
            } else {
                return next();
            }


        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Adding a child
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    addChild: async (request, response, next) => {
        try {
            const parentId = Number(request.params.id);
            const newChild = await adminDataMapper.addChild((request.body), parentId);

            if (!newChild) {
                return next();
            }

            response.json({ data: newChild });

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Get a child by their id
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    getChildById: async (request, response, next) => {

        try {
            const childId = Number(request.params.id);

            const data = await userDataMapper.findChildById(childId);

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
     * Delete a child
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    deleteChild: async (request, response, next) => {
        try {

            const parentId = Number(request.params.id);
            const childId = Number(request.params.childId);

            const child = await userDataMapper.findChildFromParent(parentId, childId);

            if (!child) {
                return next();
            }

            if (isNaN(childId)) {
                return next();
            };

            const result = await adminDataMapper.deleteChild(childId);

            if (result.rowCount > 0) {
                response.json('Enfant bien supprimé de la plateforme');
            } else {
                return next();
            }

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    }

}

module.exports = adminController;