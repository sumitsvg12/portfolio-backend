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
    const backendUrl = process.env.BACKEND_URL || "https://backend-portfolio-zgb9.onrender.com";
    if (req.file) {
      req.body.image = req.file.path;
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

// Show edit form with existing data
module.exports.editProjectPage = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send("Project not found");
    }
    res.render("editProject", { project });
  } catch (error) {
    res.status(500).send("Error loading project");
  }
};

// Handle project update
module.exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    if (req.file) {
      req.body.image = req.file.path
    }

    const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, { new: true });

    if (!updatedProject) {
      return res.status(404).send("Project not found");
    }

    res.redirect("/projectpage"); // or wherever your admin panel is
  } catch (error) {
    res.status(500).send("Failed to update project");
  }
};
