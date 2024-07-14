const pool = require('../config/database');

const servicePaginate = async ({ page, limit }) => {
  const connection = await pool.getConnection();
  const offset = (page - 1) * limit;

  const [rows] = await connection.query("SELECT * FROM services LIMIT ? OFFSET ?", [limit, offset]);

  connection.release();

  return rows;
}

const serviceAll = async () => {
  const connection = await pool.getConnection();

  const [rows] = await connection.query("SELECT * FROM services");

  connection.release();

  return rows;
}

const serviceGetById = async (id) => {
  const connection = await pool.getConnection();

  const [rows] = await connection.query("SELECT * FROM services WHERE id = ?", [id]);

  connection.release();

  return rows[0] ?? {};
}

const serviceCreate = async (service) => {
  const connection = await pool.getConnection();

  const { description } = service;

  const [result] = await connection.query(
    "INSERT INTO services (description) VALUES (?)",
    [description]
  );

  const createdServiceId = result.insertId;
  connection.release();

  return createdServiceId;
};

const serviceUpdate = async (service, id) => {
  const connection = await pool.getConnection();

  const { description } = service;

  await connection.query(
    "UPDATE services SET description = ? WHERE id = ?",
    [description, id]
  );

  connection.release();

  return true; // Return true to indicate successful update
};

const serviceDelete = async (id) => {
  const connection = await pool.getConnection();

  await connection.query("DELETE FROM services WHERE id = ?", [id]);

  connection.release();

  return true; // Return true to indicate successful deletion
};

module.exports = {
  servicePaginate,
  serviceGetById,
  serviceCreate,
  serviceUpdate,
  serviceDelete,
  serviceAll,
};
