const client = require('../client');

const recapDataMapper = {

    async findAll() {
        const result = await client.query('SELECT * FROM "recap_with_nap_and_meal"');
        // on pourra order by desc
        return result.rows;
    },

    async findById(id) {
        const result = await client.query('SELECT * FROM "recap" WHERE id = $1', [id]);
        return result.rows[0];
    },

    async add(data) {
        const result = await client.query('INSERT INTO "recap" (date, extra_info, mood, child_id) VALUES ($1, $2, $3, $4) RETURNING *', [data.date, data.extra_info, data.mood, data.child_id]);
        return result.rows[0];
    },

    async modify(recap, id) {

        const keys = Object.keys(recap);
        const values = Object.values(recap);

        console.log(id);
        for (let i = 0; i < keys.length; i++) {
            console.log(keys[i]);
            console.log(values[i]);
            await client.query(`UPDATE "recap" SET ${keys[i]} = $1, updated_at = now() WHERE id = $2 `, [values[i] , id ]);
        };
        
        return "la modification a bien été éffectuée";
    },

    async delete(id) {
        const result = await client.query('DELETE FROM "recap" WHERE id = $1', [id])
        return result;
    }



};

module.exports = recapDataMapper;