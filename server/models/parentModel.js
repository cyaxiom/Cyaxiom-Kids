const db = require('../config/database');

const ParentModel = {
  create: async ({ name, gender, email, phone }) => {
    const [result] = await db.execute(
      'INSERT INTO parents (name, gender, email, phone) VALUES (?, ?, ?, ?)',
      [name ?? null, gender ?? null, email ?? null, phone ?? null]
    );
    return { parent_id: result.insertId, name, gender, email, phone };
  },

  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM parents');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM parents WHERE parent_id = ?', [id]);
    return rows[0];
  },

  update: async (id, { name, gender, email, phone }) => {
    await db.execute(
      'UPDATE parents SET name = ?, gender = ?, email = ?, phone = ? WHERE parent_id = ?',
      [name ?? null, gender ?? null, email ?? null, phone ?? null, id]
    );
    return { parent_id: id, name, gender, email, phone };
  },

  remove: async (id) => {
    await db.execute('DELETE FROM parents WHERE parent_id = ?', [id]);
  }
};

module.exports = ParentModel;
