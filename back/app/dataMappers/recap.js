const client = require('../client');

const recapDataMapper = {

    async findAll() {
        const result = await client.query('SELECT * FROM "recap_with_nap_and_meal"');
        // on pourra order by desc
        return result.rows;
    },

    async findById(id) {
        const result = await client.query('SELECT * FROM "recap_with_nap_and_meal" WHERE id = $1', [id]);
        return result.rows[0];
    },

    async findByChildId(id) {
        const result = await client.query('SELECT * FROM "recap_with_nap_and_meal" WHERE child_id = $1', [id]);
        console.log(result)
        return result.rows;
    },

    async add(data) {
        const result = await client.query('INSERT INTO "recap_with_nap_and_meal" (date, extra_info, mood, child_id) VALUES ($1, $2, $3, $4) RETURNING *', [data.date, data.extra_info, data.mood, data.child_id]);
        //! nap and meal
        return result.rows[0];
    },

    async modify(recap, id) {

        let query = `UPDATE "recap" SET `;
        //! On veut pouvoir update "recap_with_nap_and_meal"
        const values = [];

        const keys = Object.keys(recap);

        for (let i = 0; i < keys.length; i++) {
            query += `"${keys[i]}" = $${i + 1}, `;
            values.push(recap[keys[i]]);
        }

        query += `updated_at = now() WHERE id = $${keys.length + 1} RETURNING *;`;
        values.push(id);

        const result = await client.query(query, values);

        return result.rows[0];

    },

    async delete(id) {
        const result = await client.query('DELETE FROM "recap" WHERE id = $1', [id]);
        return result;
    }

};

module.exports = recapDataMapper;