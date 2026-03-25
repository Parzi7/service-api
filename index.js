const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is working",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});