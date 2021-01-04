const express = require("express");
const path = require("path");
const { apiRouter } = require("./api");

const { sync } = require("./data_layer/index");

const PORT = process.env.PORT || 3000;
const FORCE = process.env.FORCE || false;

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api", apiRouter);

const startServer = new Promise((resolve) => {
  app.listen(PORT, () => {
    console.log("We're connected on port " + PORT);

    resolve();
  });
});

sync(FORCE)
  .then(startServer)
  .catch((error) => {
    console.error(`YIKES: ${error.toString()}`);
  });
