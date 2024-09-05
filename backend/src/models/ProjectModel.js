const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  createdByUserId: String,
  title: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);


