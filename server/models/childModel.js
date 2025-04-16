const db = require('../config/database');

const ChildModel = {
  create: async (data) => {
    const {
      parent_id,
      name,
      gender,
      birth_date,
      grade,
      address,
      state,
      city,
      zip_code,
      email,
      phone,
      special_case,
      schedule_availability
    } = data;

    const [result] = await db.execute(
      `INSERT INTO children (
        parent_id, name, gender, birth_date, grade,
        address, state, city, zip_code,
        email, phone, special_case, schedule_availability
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        parent_id ?? null,
        name ?? null,
        gender ?? null,
        birth_date ?? null,
        grade ?? null,
        address ?? null,
        state ?? null,
        city ?? null,
        zip_code ?? null,
        email ?? null,
        phone ?? null,
        special_case ?? null,
        schedule_availability ?? null
      ]
    );

    return { child_id: result.insertId, ...data };
  },

  getAll: async () => {
    const [rows] = await db.execute(`SELECT * FROM children`);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.execute(`SELECT * FROM children WHERE child_id = ?`, [id]);
    return rows[0];
  },

  update: async (id, data) => {
    const {
      parent_id,
      name,
      gender,
      birth_date,
      grade,
      address,
      state,
      city,
      zip_code,
      email,
      phone,
      special_case,
      schedule_availability
    } = data;

    await db.execute(
      `UPDATE children SET
        parent_id = ?, name = ?, gender = ?, birth_date = ?, grade = ?,
        address = ?, state = ?, city = ?, zip_code = ?,
        email = ?, phone = ?, special_case = ?, schedule_availability = ?
       WHERE child_id = ?`,
      [
        parent_id ?? null,
        name ?? null,
        gender ?? null,
        birth_date ?? null,
        grade ?? null,
        address ?? null,
        state ?? null,
        city ?? null,
        zip_code ?? null,
        email ?? null,
        phone ?? null,
        special_case ?? null,
        schedule_availability ?? null,
        id
      ]
    );

    return { child_id: id, ...data };
  },

  remove: async (id) => {
    await db.execute(`DELETE FROM children WHERE child_id = ?`, [id]);
  }
};

module.exports = ChildModel;
