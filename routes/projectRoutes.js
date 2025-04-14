
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

router.get("/editProjectPage/edit/:id", contactcot.editProjectPage);

router.post("/updateProject/edit/:id", Project.UploadImageFile, contactcot.updateProject);


module.exports=router;
