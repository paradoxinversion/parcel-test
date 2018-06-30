const path = require("path");
const express = require("express");
const app = express();

// app.get("/", (req, res) => res.send("Hello World!"));
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.resolve(__dirname, "dist")));
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "dist/index.html"));
  });
}
app.listen(3000, () => console.log("Example app listening on port 3000!"));
