const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAllUsers = async (req, res) => {
  const result = await mongodb.getDatabase().collection("users").find();
  result.toArray().then((users) => {
    res.setHeader("content-type", "application/json");
    res.status(200).json(users);
  });
};

const getUserById = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().collection("users").find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader("content-type", "application/json");
    res.status(200).json(users[0]);
  });
};

module.exports = {
  getAllUsers,
  getUserById,
};
