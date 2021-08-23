const client = require('../client');

const userDataMapper = {

    async findAll() {
        const result = await client.query('SELECT * FROM "user"');
        return result.rows;
    },

    async findAllParents() {
        const result = await client.query('SELECT * FROM "user" JOIN "parent_with_child" ON "user"."id" = "parent_with_child"."pwc_user_id" WHERE "user"."role_id" = 1')
        return result.rows;
    },

    // async findParentById(id) {
    //     const result = await client.query('SELECT * FROM "user" WHERE "role_id" = 1 AND id = $1', [id])
    //     return result.rows[0];
    // },

    async findAllStaff() {
        const result = await client.query('SELECT * FROM "user" WHERE "role_id" = 2')
        return result.rows;
    },

    async findStaffById(id) {
        const result = await client.query('SELECT * FROM "user" WHERE "role_id" = 2 AND id = $1', [id])
        return result.rows[0];
    },

    async findAllChildren() {
        const result = await client.query('SELECT * FROM "child"');
        return result.rows;
    },

    async findChildrenByParent(parentId) {
        const result = await client.query('SELECT * FROM "parent_with_child" WHERE "user_id" = $1 AND "role_id" = 1', [parentId]);
        return result.rows;
    },

    async findChildFromParent(parentId, childId) {
        const result = await client.query('SELECT * FROM "parent_with_child" WHERE "user_id" = $1 AND "child_id" = $2 AND "role_id" = 1', [parentId, childId]);
        // vérification que result contient qqch ?
        return result.rows[0];
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

    async updateUser(user, id) {
        const result = await client.query('UPDATE "user" SET address = $1, postcode = $2, city = $3, phone_number = $4, updated_at = now() WHERE id = $5 RETURNING *', [user.address, user.postcode, user.city, user.phone_number, id]);
        return result.rows[0];
    },

};

module.exports = userDataMapper;