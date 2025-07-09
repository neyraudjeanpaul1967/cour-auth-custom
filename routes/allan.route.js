const express = require("express");
const router = express.Router();

const allanCtrl = require("../controllers/allan.controler");

router.get("/bonjour", allanCtrl.bonjour);
router.get("/aurevoir", allanCtrl.aurevoir);

// API REST
router.get("/allan", allanCtrl.getAll);
router.post("/allan", allanCtrl.create);

module.exports = router;
