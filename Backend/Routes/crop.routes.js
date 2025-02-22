const express = require("express");
const {
  createCrop,
  getCropsByFarm,
  getCropById,
  updateCrop,
  deleteCrop,
  updateHealthStatus,
  updateGrowthStage,
} = require("../Controllers/crop.controller.js");
const { checkAuthenticated } = require("../Middlewares/authentication.js");
const upload = require("../Middlewares/multer.js");

const router = express.Router();

// Routes for crop management
router.post("/", checkAuthenticated, upload.single("image"), createCrop); // Create a new crop
router.get("/farm/:farmId", checkAuthenticated, getCropsByFarm); // Get all crops
router.get("/:cropId", checkAuthenticated, getCropById); // Get a crop by ID
router.put("/:cropId", checkAuthenticated, updateCrop); // Update crop details
router.delete("/:cropId", checkAuthenticated, deleteCrop); // Delete a crop
router.put("/health/:cropId", checkAuthenticated, updateHealthStatus);
router.put("/growth/:cropId", checkAuthenticated, updateGrowthStage);

module.exports = router;
