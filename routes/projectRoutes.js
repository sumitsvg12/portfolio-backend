
const express=require('express')
const router = express.Router();
const contact=require("../models/contact");
const contactcot=require("../controllers/projectinsert");
const db=require("../config/db");
const { Project, upload } = require("../models/Project");
router.post('/contact',contactcot.insertcontact);
router.get('/submitted-data',contactcot.submitted);
router.get('/projectpage',contactcot.projectpage);
router.post("/projects",upload.single("image"),contactcot.insertProject);
router.get("/projects", contactcot.getProjects);

router.get("/editProjectPage/edit/:id", contactcot.editProjectPage);

router.post("/updateProject/edit/:id", upload.single("image"), contactcot.updateProject);

 // your upload config file path



module.exports=router;
