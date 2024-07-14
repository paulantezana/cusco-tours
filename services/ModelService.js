const pool = require('../config/database');

const modelPaginate = async ({ page, limit }) => {
  const connection = await pool.getConnection();
  const offset = (page - 1) * limit;

  const [rows] = await connection.query("SELECT * FROM models LIMIT ? OFFSET ?", [limit, offset]);

  connection.release();

  return rows;
}

const modelAll = async () => {
  const connection = await pool.getConnection();

  const [rows] = await connection.query("SELECT * FROM models");

  connection.release();

  return rows;
}

const modelGetById = async (id) => {
  const connection = await pool.getConnection();

  const [rows] = await connection.query("SELECT * FROM models WHERE id = ?", [id]);

  connection.release();

  return rows[0] ?? {};
}

const modelCreate = async (model) => {
  const connection = await pool.getConnection();

  const { description, brand_id } = model;

  const [result] = await connection.query(
    "INSERT INTO models (description, brand_id) VALUES (?, ?)",
    [description, brand_id]
  );

  const createdModelId = result.insertId;
  connection.release();

  return createdModelId;
};

const modelUpdate = async (model, id) => {
  const connection = await pool.getConnection();

  const { description, brand_id } = model;

  await connection.query(
    "UPDATE models SET description = ?, brand_id = ? WHERE id = ?",
    [description, brand_id, id]
  );

  connection.release();

  return true; // Return true to indicate successful update
};

const modelDelete = async (id) => {
  const connection = await pool.getConnection();

  await connection.query("DELETE FROM models WHERE id = ?", [id]);

  connection.release();

  return true; // Return true to indicate successful deletion
};

module.exports = {
  modelPaginate,
  modelGetById,
  modelCreate,
  modelUpdate,
  modelDelete,
  modelAll,
};
