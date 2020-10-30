// ==============================================================================
// DEPENDENCIAS
// Paquetes de npm que se usarán
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS
// ==============================================================================

// Crear un servidor de express
var app = express();

// Puerto inicial
var PORT = process.env.PORT || 8080;

// Middleware para usar json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================================
// ROUTES
// =============================================================================

// GET
app.get("/", function(req, res) {
    res.json("You are on the homepage");
});

// POST
app.post("/post", function(req, res) {
    res.json("Welcome " + req.body.user);
});

// DELETE
app.delete("/delete", function(req, res) {
    res.json("{delete: true}");
});

// PUT
app.put("/put/:id", function(req, res) {
    res.json("Task " + req.params.id + " has ben updated");
});

// =============================================================================
// LISTENER
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });