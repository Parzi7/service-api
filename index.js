const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

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