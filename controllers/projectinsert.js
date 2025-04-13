const path = require("path");
const mongoose = require('mongoose');
const contact = require("../models/contact");
const Project = require("../models/Project");

module.exports.insertcontact = async (req, res) => {
  let insertcontact = await contact.create(req.body)

  return res.status(200).json({ message: 'Form submitted successfully', data: insertcontact });
}

module.exports.submitted = async (req, res) => {
  let submittedData = await contact.find();
  res.status(200).json(submittedData);
}

module.exports.insertProject = async (req, res) => {
  try {

    // console.log(req.body);
    // console.log(req.file);
    const backendUrl = process.env.BACKEND_URL || "http://localhost:10000";
    if (req.file) {
      const filename = req.file.filename;
      req.body.image = `${backendUrl}/uploads/${filename}`;
  }

    let userdata= await Project.create(req.body);
    if (userdata) {
      return res.status(200).json({ msg: "user record inserted successfull ", data: userdata });
    }
    else {
      return res.status(200).json({ msg: "record not inseted " });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to add project" });
  }
}
module.exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
}
module.exports.projectpage = async (req, res) => {
  res.render("projectpage");
}