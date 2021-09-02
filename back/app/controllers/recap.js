const recapDataMapper = require('../dataMappers/recap');

const recapController = {

    /**
     * Getting all recaps
     * @param {*} _ 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
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

    /**
     * Getting a recap by its id
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
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

    /**
     * Getting recaps by a child id
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
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

    /**
     * Adding a recap
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    addRecap: async (request, response, next) => {
        try {

            const newRecap = await recapDataMapper.addRecap(request.body);


            const recapId = newRecap.id;

            if (!newRecap)
                return next();

            if (request.body.naps && request.body.naps !== null) {
                for (const nap of request.body.naps) {
                    await recapDataMapper.addNap(nap, recapId);
                }
            }

            if (request.body.meals && request.body.meals !== null)
                for (const meal of request.body.meals) {
                    await recapDataMapper.addMeal(meal, recapId);
                }

            const recapToAdd = await recapDataMapper.findById(recapId);

            response.json(recapToAdd);

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }

    },

    /**
     * Adding a nap to a recap
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    addNap: async (request, response, next) => {
        try {
            const recapId = request.params.recapId;

            const newNap = await recapDataMapper.addNap({ ...request.body }, recapId);

            if (!newNap) {
                return next();
            };

            response.json({ data: newNap });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Adding a meal to a recap
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    addMeal: async (request, response, next) => {
        try {

            const recapId = request.params.recapId;

            const newMeal = await recapDataMapper.addMeal({ ...request.body }, recapId);

            if (!newMeal) {
                return next();
            };

            response.json({ data: newMeal });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Modifying a recap
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    modifyRecap: async (request, response, next) => {
        try {
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

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Modifying a nap
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    modifyNap: async (request, response, next) => {
        try {
            const recapId = Number(request.params.recapId);
            const recap = await recapDataMapper.findById(recapId);

            const napId = Number(request.params.napId);

            if (!recap) {
                return next();
            }

            const newData = request.body;

            const updatedNap = await recapDataMapper.modifyNap({ ...newData }, napId);

            response.json({ updatedNap });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Modifying a meal
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */

    modifyMeal: async (request, response, next) => {
        try {
            const recapId = Number(request.params.recapId);
            const recap = await recapDataMapper.findById(recapId);

            const mealId = Number(request.params.mealId);

            if (!recap) {
                return next();
            }

            const newData = request.body;

            const updatedMeal = await recapDataMapper.modifyMeal({ ...newData }, mealId);

            response.json({ updatedMeal });
        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Deleting a recap
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
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

    /**
     * Deleting a nap
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    deleteNap: async (request, response, next) => {
        try {
            const napId = request.params.napId;

            if (isNaN(napId)) {
                return next();
            }

            if (!napId) {
                return next();
            }

            const result = await recapDataMapper.deleteNap(napId);

            if (result.rowCount > 0) {
                response.json('Sieste bien supprimée');
            } else {
                return next();
            }

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    /**
     * Deleting a meal
     * @param {*} request 
     * @param {*} response 
     * @param {*} next 
     * @returns 
     */
    deleteMeal: async (request, response, next) => {
        try {
            const mealId = request.params.mealId;

            if (isNaN(mealId)) {
                return next();
            }

            if (!mealId) {
                return next();
            }

            const result = await recapDataMapper.deleteMeal(mealId);

            if (result.rowCount > 0) {
                response.json('Repas bien supprimé');
            } else {
                return next();
            }

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    }
};

module.exports = recapController;