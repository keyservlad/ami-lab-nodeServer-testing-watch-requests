const express = require("express");

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.body);
  console.log(JSON.stringify(req.headers), "\n");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome get")
})
app.post("/", (req, res) => {
  res.send("Welcome post")
})

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
}) 