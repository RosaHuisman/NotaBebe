const commentDataMapper = require('../dataMappers/comment');
const userDataMapper = require('../dataMappers/user');


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

            if (comment) {
                response.json(comment);
            } else {
                return next();
            };

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    getCommentsByChildId: async (request, response, next) => {
        try {
            const childId = Number(request.params.childId);
            const data = await commentDataMapper.findByChildId(childId);
            console.log(data);

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

    getCommentsByParentId: async (request, response, next) => {
        try {
            const parentId = Number(request.params.parentId);
            const comments = await commentDataMapper.findByParentId(parentId);
            console.log(comments);

            if (comments) {
                response.json(comments);
            } else {
                return next();
            }

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    addComment: async (request, response, next) => {
        try {

            //! en cours !!
            const parentId = request.params.id;
            console.log("parentId", parentId);
            const childId = request.params.childId;
            console.log("childId", childId);
            //TODO ajouter les request params dans la méthode

            const parent = await userDataMapper.findParentById(parentId);
            console.log("parent", parent)

            if (!parent) {
                return next();
            }

            const newData = request.body;

            console.log(request.body);

            const newComment = await commentDataMapper.add({ ...newData }, childId);

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