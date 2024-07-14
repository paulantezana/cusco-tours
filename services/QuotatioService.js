const pool = require('../config/database');

const quotationPaginate = async ({ page, limit }) => {
  const connection = await pool.getConnection();
  const offset = (page - 1) * limit;

  const [rows] = await connection.query("SELECT * FROM quotations LIMIT ? OFFSET ?", [limit, offset]);

  connection.release();

  return rows;
}

const quotationAll = async () => {
  const connection = await pool.getConnection();

  const [rows] = await connection.query("SELECT * FROM quotations");

  connection.release();

  return rows;
}

const quotationGetById = async (id) => {
  const connection = await pool.getConnection();

  const [rows] = await connection.query("SELECT * FROM quotations WHERE id = ?", [id]);

  connection.release();

  return rows[0] ?? {};
}

const quotationCreate = async (quotation) => {
  const connection = await pool.getConnection();

  const { date_of_issue, full_name, email, phone, plate, build_year, brand_id, model_id, service_id } = quotation;

  const [result] = await connection.query(
    "INSERT INTO quotations (date_of_issue, full_name, email, phone, plate, build_year, brand_id, model_id, service_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [date_of_issue, full_name, email, phone, plate, build_year, brand_id, model_id, service_id]
  );

  const createdQuotationId = result.insertId;
  connection.release();

  return createdQuotationId;
};

const quotationUpdate = async (quotation, id) => {
  const connection = await pool.getConnection();

  const { date_of_issue, full_name, email, phone, plate, build_year, brand_id, model_id, service_id } = quotation;

  await connection.query(
    "UPDATE quotations SET date_of_issue = ?, full_name = ?, email = ?, phone = ?, plate = ?, build_year = ?, brand_id = ?, model_id = ?, service_id = ? WHERE id = ?",
    [date_of_issue, full_name, email, phone, plate, build_year, brand_id, model_id, service_id, id]
  );

  connection.release();

  return true; // Return true to indicate successful update
};

const quotationDelete = async (id) => {
  const connection = await pool.getConnection();

  await connection.query("DELETE FROM quotations WHERE id = ?", [id]);

  connection.release();

  return true; // Return true to indicate successful deletion
};

module.exports = {
  quotationPaginate,
  quotationGetById,
  quotationCreate,
  quotationUpdate,
  quotationDelete,
  quotationAll,
};
