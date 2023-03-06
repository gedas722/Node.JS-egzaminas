const express = require("express");
const app = express();

//Midellware
app.use = express.json();

// Server healthy check
app.get("/health", (req, res) => {
  res.status(200).send("OK1!");
});

// Port config
const port = process.env.PORT || 3210;

app.listen(port, () => {
  console.log(`Server running at localhost: ${port}`);
});

// Table routes
