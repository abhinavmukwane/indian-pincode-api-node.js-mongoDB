const mongoose = require('mongoose');

const pincodeSchema = new mongoose.Schema({
  Pincode: Number,
  City: String,
  State: String
});

// const pincodeSchema = new mongoose.Schema({
//   Pincode: {
//     type: Number,
//     required: true
//   },
//   District: {
//     type: String,
//     required: true
//   },
//   StateName: {
//     type: String,
//     required: true
//   }
// });

module.exports = mongoose.model('Pincode', pincodeSchema);