const path = require("path");
const fs = require("fs");
const express = require("express");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

const buildPath = path.join(__dirname, "dist/");

//si la carpeta no existe para ejecución
if (!fs.existsSync(buildPath)) {
  throw new Error("Build the project first");
}

app.use(helmet());

// Handle client routing, return all requests to the app
app.get("*", (_req, res, next) => {
  try {
    res.send("Site Under construction");
    //res.sendFile(path.join(__dirname, path.normalize("dist/index.html")));
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res) => {
  console.error("Erro del server ", error);
  res.status(500).send({ error: "Error Contact Admin" });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
