const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  title: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('ProjectsModel', projectsSchema);


