const mongoose = require('mongoose');

const ProjectsDataSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('ProjectsModel', ProjectsDataSchema);