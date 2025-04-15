const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 10000;
const path = require("path");
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(express.json());

const submittedData = [];
app.use(express.urlencoded());


app.use(cors({
  origin: [
    "https://portfolio-frontend-x5em.onrender.com",
    "http://localhost:3001",  // or 3001, depending on your setup
  ]
}));
// const db=require("./config/db")4

app.set("view engine","ejs");
app.set("views",path.join((__dirname,"views")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



mongoose.connect('mongodb+srv://sumitsvg9836:OCYibTjsM16AabZl@cluster0.8lhg9.mongodb.net/project')
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});
app.use("/api", require("./routes/projectRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
