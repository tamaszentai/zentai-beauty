const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const path = require('path');

const bioRoutes = require("./routes/bio-routes");
const galleryRoutes = require("./routes/gallery-routes");
const userRoutes = require("./routes/user-routes");

const db = config.get("mongoURI");

const app = express();

app.use(express.json());

app.use('/uploads/images', express.static(path.join('uploads','images')));

app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/bio", bioRoutes);
app.use("/api/gallery", galleryRoutes);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
