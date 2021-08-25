const client = require('../client');
const { deleteChild } = require('../controllers/admin');

const adminDataMapper = {

    async countEmail(email) {
        const result = await client.query('SELECT COUNT(*) FROM "user" WHERE email = $1', [email]);
        return result.rows[0];
    },

    async insertOne(data) {
        const result = await client.query('INSERT INTO "user" (first_name, last_name, address, postcode, city, email, password, phone_number, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [data.first_name, data.last_name, data.address, data.postcode, data.city, data.email, data.password, data.phone_number, data.role_id]);

        return result.rows[0];
    },

    async addChild(data) {
        const result = await client.query('INSERT INTO "child" (first_name, last_name, birthdate, birthplace, sex, allergies) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [data.first_name, data.last_name, data.birthdate, data.birthplace, data.sex, data.allergies]);

        //TODO comment relier avec le parent ?? soit, comment faire une "insertion" sur la table de liaison

        return result.rows[0];
    },

    async delete(id) {
        //TODO : factoriser le tablename pour qu'on puisse utiliser la même méthode pour toutes les suppressions

        const result = await client.query('DELETE FROM "user" WHERE id = $1', [id])
        return result;
    },

    async deleteChild(id) {
        // TODO : récupérer le parent id... partir sur la vue sql ????
        const result = await client.query('DELETE FROM "child" WHERE id = $1', [id]);
    }


};

module.exports = adminDataMapper;