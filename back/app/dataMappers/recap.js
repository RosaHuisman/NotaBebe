const client = require('../client');

const recapDataMapper = {

    async findAll() {
        const result = await client.query('SELECT * FROM "recap"');
        // on pourra order by desc
        return result.rows;
    },

    async findById(id) {
        const result = await client.query('SELECT * FROM "recap" WHERE id = $1', [id]);
        return result.rows[0];
    },

    async add(data) {
        //console.log('datamapper', data)
        const result = await client.query('INSERT INTO "recap" (date, extra_info, mood, child_id) VALUES ($1, $2, $3, $4) RETURNING *', [data.date, data.extra_info, data.mood, data.child_id]);
        return result.rows[0];
    },

    async modify(recap, id) {
        const result = await client.query('UPDATE "recap" SET date = $1, extra_info = $2, mood = $3, child_id = $4, updated_at = now() WHERE id = $5 RETURNING *', [recap.date, recap.extra_info, recap.mood, recap.child_id, id]);
        return result.rows[0];
    },

    async delete(id) {
        const result = await client.query('DELETE FROM "recap" WHERE id = $1', [id])
        return result;
    }



};

module.exports = recapDataMapper;