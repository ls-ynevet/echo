const express = require("express");
const parser = require("body-parser");

const app = express();
const port = 3000;

app.use(parser.text());

app.post("/echo", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

console.log(require.main);
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = app;