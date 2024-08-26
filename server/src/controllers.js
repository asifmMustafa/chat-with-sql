const { add_record, get_records } = require("./db/functions");

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

const getRecords = async (req, res) => {
  const { table } = req.query;
  try {
    const results = await get_records(table);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addRecord,
  getRecords,
};
