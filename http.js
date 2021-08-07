const express = require("express");
const app = express();
const fs = require("fs");
const data = require("./MOCK_DATA.json");

// var data = fs.readFileSync("MOCK_DATA.json");
// console.log(data);

app.use(express.json());

// var fs = require("fs");
// console.log(fs.readFile("/MOCK_DATA.json"));
app.listen(2000, () => {
  console.log("Listnening on 2000");
});

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/users", (req, res) => {
  res.send(data);
});

app.post("/users", (req, res) => {
  if (req.body != undefined) {
    data.push(req.body);
    // fs.writeFile();
    res.send(data);
    // console.log(data);
  }
});

app.patch("/user:id", (req, res) => {
  console.log(req.params);
  data.forEach((el) => {
    if (el.id == req.params.id) {
      console.log(el);
    }
  });
});

app.delete("/user:id", (req, res) => {
  console.log(req.params);
  data.forEach((el) => {
    if (el.id == req.params.id) {
      console.log(el);
    }
  });
});
