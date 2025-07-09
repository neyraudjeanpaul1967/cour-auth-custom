const { error } = require("console");
const AllanModel = require("../models/allan.model");

exports.bonjour = async (req, res) => {
  try {
    res.status(200).json({ error: false, message: "Bonjour" });
  } catch (error) {
    console.error("Error in bonjour controller:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.aurevoir = async (req, res) => {
  try {
    res.status(200).json({ error: false, message: "Aurevoir" });
  } catch (error) {
    console.error("Error in aurevoir controller:", error);
    res.status(500).json({ error: error.message });
  }
};

// Liste tous les utilisateurs
exports.getAll = async (req, res) => {
  try {
    const users = await AllanModel.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crée un utilisateur
exports.create = async (req, res) => {
  try {
    const user = await AllanModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
