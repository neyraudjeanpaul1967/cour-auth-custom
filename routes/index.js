// Point d'entrée pour les routes
// Ajoutez ici vos routes principales ou importez-les

const express = require("express");
const router = express.Router();

const middleware = require("../middleware");
const allanRoutes = require("./allan.route");
router.use("/allan", middleware.one,middleware.two, allanRoutes);

// Exemple de route de test
router.get("/test", (req, res) => {
  res.send("Route test OK");
});

module.exports = router;
