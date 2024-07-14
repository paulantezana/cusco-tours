const { quotationPaginate, quotationGetById, quotationCreate, quotationUpdate, quotationDelete, quotationAll } = require("../services/QuotatioService");
const Result = require("../models/result");

const paginate = async (req, res) => {
  let result = new Result()
  try {
    let body = req.body;

    const data = await quotationPaginate(body);
    result.data = data;
    result.success = true;

    res.json(result);
  } catch (error) {
    result.message = error.message;
    return res.status(500).json(result);
  }
};

const all = async (req, res) => {
  let result = new Result()
  try {
    const data = await quotationAll();
    result.data = data;
    result.success = true;

    res.json(result);
  } catch (error) {
    result.message = error.message;
    return res.status(500).json(result);
  }
};

const create = async (req, res) => {
  let result = new Result()
  try {
    let body = req.body;

    const response = await quotationCreate(body);

    result.success = true;
    result.data = response;
    return res.status(201).json(result);
  } catch (error) {
    result.message = error.message;
    return res.status(500).json(result);
  }
};

const update = async (req, res) => {
  let result = new Result()
  try {
    let body = req.body;
    const quotationId = req.params.id;

    const response = await quotationUpdate(body, quotationId);

    result.success = true;
    result.data = response;
    return res.status(200).json(result);
  } catch (error) {
    result.message = error.message;
    return res.status(500).json(result);
  }
};

const remove = async (req, res) => {
  let result = new Result()
  try {
    const quotationId = req.params.id;

    const response = await quotationDelete(quotationId);

    result.success = true;
    result.data = response;
    return res.status(204).json(result);
  } catch (error) {
    result.message = error.message;
    return res.status(500).json(result);
  }
};

const getById = async (req, res) => {
  let result = new Result()
  try {
    const quotationId = req.params.id;

    const response = await quotationGetById(quotationId);

    result.success = true;
    result.data = response;
    return res.status(200).json(result);
  } catch (error) {
    result.message = error.message;
    return res.status(500).json(result);
  }
};

module.exports = {
  paginate,
  create,
  update,
  remove,
  getById,
  all,
};
