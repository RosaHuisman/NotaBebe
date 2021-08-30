module.exports = {

    /**
     * showing 404 error
     * @param {_} _ 
     * @param {response} response 
     */
    notFoundResource(_, response){
        response.status(404).json({data: [], error: `Resource not found`});
    }
    
}