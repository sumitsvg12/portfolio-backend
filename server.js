const express = require('express')
const mongoose = require('mongoose')

const PORT = 5000;
const path = require("path");
const cors = require('cors');

const app = express();
app.use(express.json());

const submittedData = [];
app.use(express.urlencoded());

app.use(cors());
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
  console.log(`Server is running on http://localhost:${PORT}`);
});
