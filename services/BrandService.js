const pool = require('../config/database');

const brandPaginate = async ({ page, limit }) => {
  const connection = await pool.getConnection();
  const offset = (page - 1) * limit;

  const [rows] = await connection.query("SELECT * FROM brands LIMIT ? OFFSET ?", [limit, offset]);

  connection.release();

  return rows;
}

const brandAll = async () => {
  const connection = await pool.getConnection();

  const [rows] = await connection.query("SELECT * FROM brands");

  connection.release();

  return rows;
}

const brandGetById = async (id) => {
  const connection = await pool.getConnection();

  const [rows] = await connection.query("SELECT * FROM brands WHERE id = ?", [id]);

  connection.release();

  return rows[0] ?? {};
}

const brandCreate = async (brand) => {
  const connection = await pool.getConnection();

  const { description } = brand;

  const [result] = await connection.query(
    "INSERT INTO brands (description) VALUES (?)",
    [description]
  );

  const createdBrandId = result.insertId;
  connection.release();

  return createdBrandId;
};

const brandUpdate = async (brand, id) => {
  const connection = await pool.getConnection();

  const { description } = brand;

  await connection.query(
    "UPDATE brands SET description = ? WHERE id = ?",
    [description, id]
  );

  connection.release();

  return true; // Return true to indicate successful update
};

const brandDelete = async (id) => {
  const connection = await pool.getConnection();

  await connection.query("DELETE FROM brands WHERE id = ?", [id]);

  connection.release();

  return true; // Return true to indicate successful deletion
};

module.exports = {
  brandPaginate,
  brandGetById,
  brandCreate,
  brandUpdate,
  brandDelete,
  brandAll,
};
