const mongoose = require("mongoose");

const connect = async () => mongoose.connect(process.env.MONGO_URi);

let connection = mongoose.connection;

connection.on("open", () => {
  let gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "store",
  }); // to store every files (user avatar, videos, images, notes, logos, icons)
  module.exports = { gridFSBucket };
});



module.exports = { connect };