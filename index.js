const express = require("express");

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();

var options = {
  key: fs.readFileSync("./ssl/server-key.pem"),
  cert: fs.readFileSync("./ssl/server-cert.pem"),
};

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

var server = https.createServer(options, app).listen(PORT, function () {
  console.log("Express server listening on port " + PORT);
});
