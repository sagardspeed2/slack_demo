const express = require("express");

const app = express();

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send("Hello");
});

app.listen(3000, () => {
  console.log(`Server listing on port: 3000`);
});
