
const express=require('express')
const router = express.Router();
const contact=require("../models/contact");
const contactcot=require("../controllers/projectinsert");
const db=require("../config/db");
const Project=require("../models/Project");

router.post('/contact',contactcot.insertcontact);
router.get('/submitted-data',contactcot.submitted);
router.get('/projectpage',contactcot.projectpage);
router.post("/projects",Project.UploadImageFile,contactcot.insertProject);
router.get("/projects", contactcot.getProjects);




module.exports=router;
