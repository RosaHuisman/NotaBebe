const client = require('../client');

const adminDataMapper = {

    async countEmail (email) {
        const result = await client.query('SELECT COUNT(*) FROM "user" WHERE email = $1', [email]);
        return result.rows[0];
    },

    async insertOne (data) {
        const result = await client.query('INSERT INTO "user" (first_name, last_name, address, postcode, city, email, password, phone_number, role_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [data.first_name, data.last_name, data.address, data.postcode, data.city, data.email, data.password, data.phone_number, data.role_id]);

        return result.rows[0];
    },


};

module.exports = adminDataMapper;