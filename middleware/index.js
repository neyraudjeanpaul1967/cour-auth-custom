exports.one = async (req, res, next) => {
  try {
    
    console.log("1");
    next();
  } catch (error) {
    console.error("Error in middleware one:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.two = async (req, res, next) => {
  try {
    console.log("2");
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
