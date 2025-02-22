import Crop from "../models/cropModel.js";
import Farm from "../models/farmModel.js";

// Create a new crop
export const createCrop = async (req, res) => {
  try {
    const { name, farm, image, harvestDate, growthStage, healthStatus } =
      req.body;

    // Check if the farm exists
    const existingFarm = await Farm.findById(farm);
    if (!existingFarm)
      return res.status(404).json({ message: "Farm not found" });

    const crop = new Crop({
      name,
      farm,
      image,
      harvestDate,
      growthStage,
      healthStatus,
    });

    await crop.save();

    // Add crop to farm
    existingFarm.crops.push(crop._id);
    await existingFarm.save();

    res.status(201).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all crops for a specific farm
export const getCropsByFarm = async (req, res) => {
  try {
    const crops = await Crop.find({ farm: req.params.farmId });

    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single crop by ID
export const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId).populate("farm");

    if (!crop) return res.status(404).json({ message: "Crop not found" });

    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update crop details
export const updateCrop = async (req, res) => {
  try {
    const updatedCrop = await Crop.findByIdAndUpdate(
      req.params.cropId,
      req.body,
      { new: true }
    );

    if (!updatedCrop)
      return res.status(404).json({ message: "Crop not found" });

    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a crop
export const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId);

    if (!crop) return res.status(404).json({ message: "Crop not found" });

    await crop.deleteOne();

    // Remove crop from the farm
    await Farm.findByIdAndUpdate(crop.farm, { $pull: { crops: crop._id } });

    res.status(200).json({ message: "Crop deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update crop growth stage
export const updateGrowthStage = async (req, res) => {
  try {
    const { growthStage } = req.body;

    const crop = await Crop.findById(req.params.cropId);
    if (!crop) return res.status(404).json({ message: "Crop not found" });

    crop.growthStage = growthStage;
    await crop.save();

    res.status(200).json({ message: "Growth stage updated", crop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update crop health status
export const updateHealthStatus = async (req, res) => {
  try {
    const { healthStatus } = req.body;

    const crop = await Crop.findById(req.params.cropId);
    if (!crop) return res.status(404).json({ message: "Crop not found" });

    crop.healthStatus = healthStatus;
    await crop.save();

    res.status(200).json({ message: "Health status updated", crop });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
