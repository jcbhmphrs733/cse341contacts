const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDatabase = (callback) => {
  if (database) {
    return callback(null, database);
  }
  MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
      database = client.db();
      return callback(null, database);
    })
    .catch((err) => {
      return callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw new Error('Database not initialized.');
  }
  return database;
};

module.exports = {
  initDatabase,
  getDatabase,
};