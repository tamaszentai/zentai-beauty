const bioModel = require("../models/bio");

const getBio = async (req, res, next) => {
  const bio = await bioModel.find({});

  try {
    res.send(bio);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createBio = async (req, res, next) => {
  const bio = new bioModel(req.body);
  try {
    await bio.save();
    res.send(bio);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateBio = async (req, res, next) => {
  const bio = await bioModel.findByIdAndUpdate(req.params.id, req.body);
  try {
  res.json(bio);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getBio = getBio;
exports.createBio = createBio;
exports.updateBio = updateBio;
