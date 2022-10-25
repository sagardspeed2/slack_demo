const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).send(`Hello ${req.body.text}`);
});

app.listen(3000, () => {
  console.log(`Server listing on port: 3000`);
});
