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

            await adminDataMapper.delete(id);

            response.json('User bien supprimé');


        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    // ADMIN CHILD

    addChild: async (request, response, next) => {
        try {

            //! ne fonctionne pas encore, il faudrait pouvoir inclure le request.params.id pour récupérer l'id du parent
            const newChild = await adminDataMapper.addChild(request.body);

            if (!newChild) {
                return next();
            }

            response.json({ data: newChild });

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    deleteChild: async (request, response, next) => {
        try {

            const parentId = Number(request.params.id);
            const childId = Number(request.params.childId);

            if (isNaN(childId)) {
                return next();
            }

            await adminDataMapper.deleteChild(childId);

            response.json('Enfant bien supprimé de la plateforme');
        } catch {
            console.error(error);
            response.json({ error: error.message });
        }
    }

}

module.exports = adminController;