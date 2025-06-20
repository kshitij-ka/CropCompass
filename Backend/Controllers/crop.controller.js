const Crop = require("../Models/crop.model.js");
const Farm = require("../Models/farm.model.js");
const { uploadOnCloudinary } = require("../Utils/cloudinary.js");
const { run } = require("../Utils/model.js");

// Create a new crop
const createCrop = async (req, res) => {
  try {
    const { name, farm, harvestDate, growthStage, healthStatus } = req.body;
    if (!req.file.path) {
      res.status(500).json({
        success: false,
        message: "Avatar not uploaded on cloudinary.",
      });
    }

    const imageUrl = await uploadOnCloudinary(req.file.path);

    console.log("Image url is : ", imageUrl);

    if (!imageUrl) {
      return res.status(500).json({
        success: false,
        message: "Image not uploaded on cloudinary.",
      });
    }

    // Check if the farm exists
    const existingFarm = await Farm.findById(farm);
    if (!existingFarm)
      return res.status(404).json({ message: "Farm not found" });

    const crop = new Crop({
      name,
      farm,
      image: imageUrl,
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
const getCropsByFarm = async (req, res) => {
  try {
    console.log("My farm id is : ", req.params.farmId);
    const crops = await Crop.find({ farm: req.params.farmId });

    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single crop by ID
const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId).populate("farm");

    if (!crop) return res.status(404).json({ message: "Crop not found" });

    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update crop details
const updateCrop = async (req, res) => {
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
const deleteCrop = async (req, res) => {
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
const updateGrowthStage = async (req, res) => {
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
const updateHealthStatus = async (req, res) => {
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

const cropHarvest = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId).populate("farm");
    console.log(crop);

    const message = `My crop is ${crop.name}, given that I have planted it on ${crop.plantedDate}, suggest me a date as to when it will be harvested. Give output in the form: ${crop.name} will take .. months to harvest around (give month name and year).`; // for harvest expectation

    const result = await run(message);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const suggestNextCrop = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId).populate("farm");
    console.log(crop);

    const message = `Currently I have ${crop.name} in my field. Considering the best optimal time for its harvestation give my location, ${crop.farm.location} and water content of my field is ${crop.farm.waterContent}. Suggest next crop I should grow and give more suggestions around it. Don't tell me when to harvest ${crop.name}, only tell me next best crop to plant in my field and give suggestions around it.`; // for next sowing suggestion

    const result = await run(message);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const suggestPesticides = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId).populate("farm");
    console.log(crop);

    const message = `Considering I have grown ${crop.name} in my field located in ${crop.farm.location} and has water content of ${crop.farm.waterContent}. Suggest pesticides I should use on the crop and when to use it considering my sow date is ${crop.sowDate}. Give precautionary measures and suggestions around it.`; // for pesticides

    const result = await run(message);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const suggestFertilizers = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.cropId).populate("farm");
    console.log(crop);

    const message = `Considering I have grown ${crop.name} in my field located in ${crop.farm.location} and has water content of ${crop.farm.waterContent}. Suggest fertilizers I should use on the crop and when to use it, i.e. after how many months after sowing considering sowing date is ${crop.sowDate} considering my sow date is ${crop.sowDate}. Give me precautionary measures.`; // for fertilizers

    const result = await run(message);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCrop,
  getCropsByFarm,
  getCropById,
  updateCrop,
  deleteCrop,
  updateGrowthStage,
  updateHealthStatus,
  cropHarvest,
  suggestNextCrop,
  suggestPesticides,
  suggestFertilizers,
};
