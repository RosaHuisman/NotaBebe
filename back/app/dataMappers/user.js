const client = require('../client');

const userDataMapper = {

    async findOne(email) {
        const result = await client.query('SELECT * FROM "user" WHERE email = $1', [email]);
        return result.rows[0];
    },

    async updatePassword(password, id) {
        console.log('password', password);
        console.log('id', id);
        const result = await client.query('UPDATE "user" SET password = $1 WHERE id = $2 RETURNING *', [password, id]);
        console.log(result)
        return result.rows[0];
    },

    async updateUser(user, id) {
        const result = await client.query('UPDATE "user" SET address=$1, postcode=$2, city=$3, phone_number=$4, updated_at = now() WHERE id =$5 RETURNING *', [user.address, user.postcode, user.city, user.phone_number, id]);
        return result.rows[0];
    },

};

module.exports = userDataMapper;