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

    getCommentById: async (request, response, next) => {
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

            const newData = request.body;

            const parentId = Number(request.params.id);
            const childId = Number(request.params.childId);

            const childLinkedToParent = await userDataMapper.findChildFromParent(parentId, childId);

            if (!childLinkedToParent) {
                return next();
            };

            const newComment = await commentDataMapper.add({ ...newData }, childId);

            if (!newComment) {
                return next();
            };

            response.json({ data: newComment });

        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    },

    modifyComment: async (request, response, next) => {
        try {

            const newData = request.body;

            const parentId = Number(request.params.id);
            const childId = Number(request.params.childId);

            const commentId = Number(request.params.commentId);

            const childLinkedToParent = await userDataMapper.findChildFromParent(parentId, childId);

            if (!childLinkedToParent) {
                return next();
            };

            const modifiedComment = await commentDataMapper.modify({ ...newData }, commentId);

            if (!modifiedComment) {
                return next();
            }

            response.json({ modifiedComment });

        } catch (error) {
            console.log(error);
            response.json({ error: error.message });
        }
    },

    deleteComment: async (request, response, next) => {
        try {

            const parentId = Number(request.params.id);
            const childId = Number(request.params.childId);
            const commentId = Number(request.params.commentId);

            const childLinkedToParent = await userDataMapper.findChildFromParent(parentId, childId);

            if (!childLinkedToParent) {
                return next();
            };

            if (isNaN(commentId)) {
                return next();
            }

            const result = await commentDataMapper.delete(commentId);

            if (result.rowCount > 0) {
                response.json('Commentaire bien supprimé');
            } else {
                return next();
            }


        } catch (error) {
            console.error(error);
            response.json({ error: error.message });
        }
    }
    
};

module.exports = commentController;