const bcrypt = require('bcrypt');

const adminDataMapper = require('../dataMappers/admin');
const userDataMapper = require('../dataMappers/user');

const adminController = {

    // ADMIN USER

    addUser: async (request, response, next) => {
        try {

            const newUser = await adminDataMapper.insertOne(request.body);

            if (!newUser) {
                return next();
            }

            response.json({ data: newUser });

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },


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

    // ADMIN CHILD

    addChild: async (request, response, next) => {
        try {
            const parentId = request.params.id;
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