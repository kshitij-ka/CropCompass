const Farm = require("../Models/farm.model.js");
const Crop = require("../Models/crop.model.js");
const Finance = require("../Models/finance.model.js");

// Create a farm
const createFarm = async (req, res) => {
  try {
    const { name, location, waterContent, soilType, size } = req.body;

    const farm = new Farm({
      name,
      location,
      size,
      waterContent,
      soilType,
      owner: req.user._id,
    });

    await farm.save();
    res.status(201).json(farm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all farms for a user
const getUserFarms = async (req, res) => {
  try {
    const farms = await Farm.find({ owner: req.user._id })
      .populate("crops")
      .populate("finances");

    res.status(200).json(farms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single farm by ID
const getFarmById = async (req, res) => {
  try {
    console.log("also i am clla ing", "My farm id is : ", req.params.farmId);
    const farm = await Farm.findById(req.params.farmId)
      .populate("crops")
      .populate("finances");

    if (!farm) return res.status(404).json({ message: "Farm not found" });

    res.status(200).json(farm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update farm details
const updateFarm = async (req, res) => {
  try {
    const updatedFarm = await Farm.findByIdAndUpdate(
      req.params.farmId,
      req.body,
      { new: true }
    );

    if (!updatedFarm)
      return res.status(404).json({ message: "Farm not found" });

    res.status(200).json(updatedFarm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a farm
const deleteFarm = async (req, res) => {
  try {
    const farm = await Farm.findById(req.params.farmId);

    if (!farm) return res.status(404).json({ message: "Farm not found" });

    await Crop.deleteMany({ farm: farm._id });
    await Finance.findByIdAndDelete(farm.finances);
    await farm.deleteOne();

    res.status(200).json({ message: "Farm deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add fertilizer to a farm
const addFertilizer = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    const farm = await Farm.findById(req.params.farmId);
    if (!farm) return res.status(404).json({ message: "Farm not found" });

    farm.fertilizer.push({ name, quantity });
    await farm.save();

    res.status(200).json({ message: "Fertilizer added", farm });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add pesticide to a farm
const addPesticide = async (req, res) => {
  try {
    const { name, quantity } = req.body;

    const farm = await Farm.findById(req.params.farmId);
    if (!farm) return res.status(404).json({ message: "Farm not found" });

    farm.pestisides.push({ name, quantity });
    await farm.save();

    res.status(200).json({ message: "Pesticide added", farm });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFarm,
  getUserFarms,
  getFarmById,
  updateFarm,
  deleteFarm,
  addFertilizer,
  addPesticide,
};
