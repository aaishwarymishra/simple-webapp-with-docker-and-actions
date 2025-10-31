const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the `public` directory
app.use(express.static(path.join(__dirname, "public")));

// JSON API route (kept for programmatic access)
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Serve the HTML page at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/health", (req, res) => res.send("ok"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
