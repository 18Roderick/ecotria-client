const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("dist/"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, path.normalize("dist/index.html")));
});

app.use((error, req, res) => {
  console.error(error);
  res.status(500).send({ error: "Error Contact Admin" });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
