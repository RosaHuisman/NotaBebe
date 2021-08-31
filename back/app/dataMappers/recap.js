const client = require('../client');

const recapDataMapper = {

    async findAll() {
        const result = await client.query('SELECT * FROM "recap_with_nap_and_meal"');
        return result.rows;
    },

    async findById(id) {
        const result = await client.query('SELECT * FROM "recap_with_nap_and_meal" WHERE id = $1', [id]);
        return result.rows[0];
    },

    async findByChildId(id) {
        const result = await client.query('SELECT * FROM "recap_with_nap_and_meal" WHERE child_id = $1', [id]);
        return result.rows;
    },

    async addRecap(data) {
        const result = await client.query('INSERT INTO "recap" (date, extra_info, mood, child_id) VALUES ($1, $2, $3, $4) RETURNING *', [data.date, data.extra_info, data.mood, data.child_id]);
        return result.rows[0];
    },

    async addNap(data, id) {
        const result = await client.query('INSERT INTO "nap" (start_time, end_time, comment, recap_id) VALUES ($1, $2, $3, $4) RETURNING *', [data.start_time, data.end_time, data.comment, id]);
        return result.rows[0];
    },

    async addMeal(data, id) {
        const result = await client.query('INSERT INTO "meal" (time, comment, recap_id) VALUES ($1, $2, $3) RETURNING *', [data.time, data.comment, id]);
        return result.rows[0];
    },

    async modifyRecap(recap, id) {

        let query = `UPDATE "recap" SET `;

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

    async modifyNap(nap, id) {
        let query = `UPDATE "nap" SET `;

        const values = [];

        const keys = Object.keys(nap);

        for (let i = 0; i < keys.length; i++) {
            query += `"${keys[i]}" = $${i + 1}, `;
            values.push(nap[keys[i]]);
        }

        query += `updated_at = now() WHERE id = $${keys.length + 1} RETURNING *;`;
        values.push(id);

        const result = await client.query(query, values);

        return result.rows[0];
    },

    async modifyMeal(meal, id) {
        let query = `UPDATE "meal" SET `;

        const values = [];

        const keys = Object.keys(meal);

        for (let i = 0; i < keys.length; i++) {
            query += `"${keys[i]}" = $${i + 1}, `;
            values.push(meal[keys[i]]);
        }

        query += `updated_at = now() WHERE id = $${keys.length + 1} RETURNING *;`;
        values.push(id);

        const result = await client.query(query, values);

        return result.rows[0];
    },


    async deleteRecap(id) {
        const result = await client.query('DELETE FROM "recap" WHERE id = $1', [id]);
        return result;
    },

    async deleteNap(id) {
        const result = await client.query('DELETE FROM "nap" WHERE id = $1', [id]);
        return result;
    },

    async deleteMeal(id) {
        const result = await client.query('DELETE FROM "meal" WHERE id = $1', [id]);
        return result;
    }

    //deleteNap
    //deleteMeal

};

module.exports = recapDataMapper;