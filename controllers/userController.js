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

const createUser = async (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
