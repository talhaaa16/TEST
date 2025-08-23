const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const authrouters = require("./routes/auth");
const db = require("./db/db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ API routes
app.use("/api/auth", authrouters);

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("Hello World from Backend ✅");
});

// ✅ Serve React frontend (from frontend/build)
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// ✅ Use Render’s PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
