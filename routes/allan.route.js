const express = require("express");
const router = express.Router();

const middleware = require("../middleware");
const allanCtrl = require("../controllers/allan.controler");

router.get("/bonjour", middleware.three, allanCtrl.bonjour);
router.get("/aurevoir", allanCtrl.aurevoir);

// API REST
router.get("/allan", allanCtrl.getAll);
router.post("/allan", allanCtrl.create);

module.exports = router;
