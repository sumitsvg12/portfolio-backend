const mongoose=require('mongoose');

const path=require("path");

const multer=require("multer");
const Imagepath="/uploads";

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    liveLink:{
        type:String,
        required:true,
    },
    githubLink:{
        type:String,
        required:true,
    },  
    image:{
        type:String,
        required:true,
    },  
});


const StorageImage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "uploads/");
    },
    filename:(req,file,cb)=>{
        const ext = path.extname(file.originalname); 
    cb(null, "image-" + Date.now() + ext);
    }
})

projectSchema.statics.UploadImageFile=multer({storage:StorageImage}).single("image");
projectSchema.statics.imgpath=Imagepath;

const Project = mongoose.model("Project", projectSchema);
module.exports=Project;





