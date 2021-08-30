const recapDataMapper = require('../dataMappers/recap');

const recapController = {

    getAllRecaps: async (_, response, next) => {
        try {
            const recaps = await recapDataMapper.findAll();

            if (recaps) {
                response.json(recaps);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    getRecapById: async (request, response, next) => {
        try {
            const recapId = Number(request.params.id);
            const data = await recapDataMapper.findById(recapId);

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

    getRecapsByChildId: async (request, response, next) => {
        try {
            const childId = Number(request.params.childId);
            const data = await recapDataMapper.findByChildId(childId);

            if (data) {
                response.json(data);
            } else {
                return next();
            }

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    addRecap: async (request, response, next) => {
        try {
            const newRecap = await recapDataMapper.addRecap(request.body);

            if (!newRecap) {
                return next();
            }

            response.json({ data: newRecap });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    addNap: async (request, response, next) => {
        try {
            const recapId = request.params.recapId;

            const newNap = await recapDataMapper.addNap({...request.body}, recapId);

            if (!newNap) {
                return next();
            };

            response.json({ data: newNap });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    addMeal: async (request, response, next) => {
        try {

            const recapId = request.params.recapId;

            const newMeal = await recapDataMapper.addMeal({...request.body}, recapId);

            if (!newMeal) {
                return next();
            };

            response.json({ data: newMeal });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },
    

    modifyRecap: async (request, response, next) => {
        try {
            const recapId = Number(request.params.recapId);
            const recap = await recapDataMapper.findById(recapId);

            if (!recap) {
                return next();
            }

            const newData = request.body;

            const updatedRecap = await recapDataMapper.modifyRecap({ ...newData }, recapId);

            response.json({ updatedRecap });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },
    
    modifyNap: async (request, response, next) => {
        try {

        } catch (error) {
            console.log(error);
            resoonse.json({ error: error.message });
        }
    },

    modifyMeal: async (request, response, next) => {
        try {

        } catch (error) {
            console.log(error);
            resoonse.json({ error: error.message });
        }
    },

    deleteRecap: async (request, response, next) => {
        try {

            const recapId = Number(request.params.recapId);

            if (isNaN(recapId)) {
                return next();
            }

            if (!recapId) {
                return next();
            }

            const result = await recapDataMapper.deleteRecap(recapId);

            if (result.rowCount > 0) {
                response.json('Récap bien supprimé');
            } else {
                return next();
            }
            
        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    deleteNap: async (request, response, next) => {

    },

    deleteMeal: async (request, response, next) => {

    }
};

module.exports = recapController;