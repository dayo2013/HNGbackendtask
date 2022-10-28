const express = require("express");

const PORT = process.env.PORT || 3500;
const app = express();

app.get("/", (req, res) => {
  const data = {
    slackUsername: "Emmanuel",
    backend: true,
    age: 32,
    bio: "learning always",
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});
