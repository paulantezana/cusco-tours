const { brandPaginate, brandGetById, brandCreate, brandUpdate, brandDelete, brandAll } = require("../services/BrandService");
const Result = require("../models/result");

const paginate = async (req, res) => {
  let result = new Result()
  try {
    let body = req.body;

    const data = await brandPaginate(body);
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
    const data = await brandAll();
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

    const response = await brandCreate(body);

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
    const brandId = req.params.id;

    const response = await brandUpdate(body, brandId);

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
    const brandId = req.params.id;

    const response = await brandDelete(brandId);

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
    const brandId = req.params.id;

    const response = await brandGetById(brandId);

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
