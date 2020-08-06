const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const bioRoutes = require("./routes/bio-routes");
const galleryRoutes = require("./routes/gallery-routes");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/api/bio", bioRoutes);

app.use("/api/gallery", galleryRoutes);

mongoose
.connect('mongodb+srv://nephatum:halacska@cluster0.6c65h.mongodb.net/zentai-beauty?retryWrites=true&w=majority')
.then(() => {
  app.listen(5000);
})
.catch(err => {
  console.log(err);
});
