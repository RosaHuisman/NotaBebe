const recapDataMapper = require('../dataMappers/recap');

const recapController = {

    getAllRecaps: async (request, response) => {
        try {
            const recaps = await recapDataMapper.findAll();
            response.json(recaps);
        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    addRecap: async (request, response, next) => {
        try {
            //console.log(request.body)
            const newRecap = await recapDataMapper.add(request.body);
            //console.log(newRecap)
            if (!newRecap) {
                return next();
            }

            console.log('récap bien ajouté')
            response.json({ data: newRecap })

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    modifyRecap: async (request, response, next) => {
        try {
            const recapId = Number(request.params.recapId);
            const recap = await recapDataMapper.findById(recapId);
            console.log(recap)

            if (!recap) {
                return next();
            }

            const newData = request.body;
            const updatedRecap = await recapDataMapper.modify({ ...newData }, recapId);

            response.json({ updatedRecap });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
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

            await recapDataMapper.delete(recapId);

            //! fonctionne, mais renvoie la réponse à chaque fois, même si le recap est supprimé. Peut-être faudra-t-il passer par un findById avant de delete (et pareil pour l'user)
            response.json('Récap bien supprimé');


        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    }
};

module.exports = recapController;