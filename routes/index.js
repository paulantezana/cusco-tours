const express = require("express");

const userRoutes = require("./userRoutes");
const brandRoutes = require("./brandRoutes");
const modelRoutes = require("./modelRoutes");
const quotationRoutes = require("./quotatioRoutes");
const roleRoutes = require("./roleRoutes");
const serviceRoutes = require("./serviceRoutes");

const router = express.Router();

router.use(userRoutes);
router.use(brandRoutes);
router.use(modelRoutes);
router.use(quotationRoutes);
router.use(roleRoutes);
router.use(roleRoutes);
router.use(serviceRoutes);

module.exports = router;