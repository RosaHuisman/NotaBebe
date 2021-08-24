const commentDataMapper = require('../dataMappers/comment');


const commentController = {

    getAllComments: async (_, response) => {
        try {
            const comments = await commentDataMapper.findAll();

            if (comments) {
                response.json(comments);
                } else {
                    return next();
                };
        } catch {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    getCommentById: async (request, response) => {
        try {
            const commentId = Number(request.params.id);
            const comment = await commentDataMapper.findById(commentId);

            if (commnent) {
            response.json(comment);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    addComment: async (request, response, next) => {
        try {

            const newComment = await commentDataMapper.add(request.body);

            if (!newComment) {
                return next();
            }

            response.json({ data: newComment });

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    modifyComment: async (request, response, next) => {
        try {

            const commentId = Number(request.params.id);
            const comment = await commentDataMapper.findById(commentId);

            if (!comment) {
                return next();
            }

            const newData = request.body;

            const modifiedComment = await commentDataMapper.modify({ ...newData }, commentId);
            // response.redirect('/');
            response.json({ modifiedComment });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    deleteComment: async (request, response, next) => {
        try {

            const id = Number(request.params.id);

            if (isNaN(id)) {
                return next();
            }

            await commentDataMapper.delete(id);

            response.json('Commentaire bien supprimé');


        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },







};

module.exports = commentController;