module.exports = {

    /**
     * showing 404 error
     * @param {_} _ 
     * @param {response} response - The response 404
     */
    notFoundResource(_, response) {
        response.status(404).json({ data: [], error: `Resource not found` });
    }

}