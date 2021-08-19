const client = require('../client');

const userDataMapper = {

    async findAll() {
        const result = await client.query('SELECT * FROM "user');
        return result.rows;
    },

    async findOne(email) {
        const result = await client.query('SELECT * FROM "user" WHERE email = $1', [email]);
        return result.rows[0];
    },

    async findById(id) {
        const result = await client.query('SELECT * FROM "user" WHERE id = $1', [id]);
        return result.rows[0];
    },

    async updatePassword(password, id) {
        const result = await client.query('UPDATE "user" SET password = $1 WHERE id = $2 RETURNING *', [password, id]);
        return result.rows[0];
    },

    async updateUser(user) {
        // console.log('id', id)
        console.log('user', user)

        //! POUR LE CÔTÉ FRONT : UN SEUL FORMULAIRE AVEC 4 INPUTS
        //! au clic valide la value de l'input ; pour sauvegarder tous les inputs
        const result = await client.query('UPDATE "user" SET address = $1, postcode = $2, city = $3, phone_number = $4, updated_at = now() WHERE id = $5 RETURNING *', [user.address, user.postcode, user.city, user.phone_number, user.id]);
        console.log('result updateuser datamapper', result);
        return result.rows[0];
    },

};

module.exports = userDataMapper;