const { add_record } = require("./functions");

const addRecord = async (req, res) => {
  const { table, new_record } = req.body;
  try {
    const results = await add_record(table, new_record);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addRecord,
};
