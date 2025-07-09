// Modèle pour l'utilisateur Allan avec Supabase
const supabase = require("../services/supabaseCclient");

const TABLE = "allan"; // Changez le nom si votre table s'appelle différemment

const AllanModel = {
  // Créer un utilisateur
  async create(data) {
    const { data: result, error } = await supabase
      .from(TABLE)
      .insert([data])
      .select();
    if (error) throw error;
    return result[0];
  },

  // Récupérer un utilisateur par ID
  async getById(id) {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  // Récupérer tous les utilisateurs
  async getAll() {
    const { data, error } = await supabase.from(TABLE).select("*");
    if (error) throw error;
    return data;
  },

  // Mettre à jour un utilisateur
  async update(id, updates) {
    const { data, error } = await supabase
      .from(TABLE)
      .update(updates)
      .eq("id", id)
      .select();
    if (error) throw error;
    return data[0];
  },

  // Supprimer un utilisateur
  async remove(id) {
    const { error } = await supabase.from(TABLE).delete().eq("id", id);
    if (error) throw error;
    return true;
  },
};

module.exports = AllanModel;
