const express = require("express");
const {
  createFarm,
  getUserFarms,
  getFarmById,
  updateFarm,
  deleteFarm,
} = require("../Controllers/farm.controller.js");
const { checkAuthenticated } = require("../Middlewares/authentication.js");

const router = express.Router();

router.post("/", checkAuthenticated, createFarm); // Create a new farm
router.get("/", checkAuthenticated, getUserFarms); // Get all farms
router.get("/:farmId", checkAuthenticated, getFarmById); // Get a farm by ID
router.put("/:farmId", checkAuthenticated, updateFarm); // Update a farm
router.delete("/:farmId", checkAuthenticated, deleteFarm); // Delete a farm

module.exports = router;
