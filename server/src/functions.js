const client = require("./db");

const add_record = async (table, new_record = {}) => {
  const columns = Object.keys(new_record).join(", ");
  const placeholders = Object.keys(new_record)
    .map((_, i) => `$${i + 1}`)
    .join(", ");
  const values = Object.values(new_record);

  const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *;`;

  const result = await client.query(query, values);

  return result.rowCount === 1;
};

module.exports = { add_record };
