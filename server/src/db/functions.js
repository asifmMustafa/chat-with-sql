const client = require("./db");

const add_record = async (table, new_record = {}) => {
  // Extract the column names from the new_record object and join them into a string
  // Example: If new_record = { name: 'John', age: 30 }, columns = 'name, age'
  const columns = Object.keys(new_record).join(", ");

  // Create a string of placeholders (e.g., $1, $2, ...) for the values
  // Example: If new_record = { name: 'John', age: 30 }, placeholders = '$1, $2'
  const placeholders = Object.keys(new_record)
    .map((_, i) => `$${i + 1}`)
    .join(", ");

  // Extract the values from the new_record object into an array
  // Example: If new_record = { name: 'John', age: 30 }, values = ['John', 30]
  const values = Object.values(new_record);

  // Example: If table = 'users' and new_record = { name: 'John', age: 30 },
  //          query = 'INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *;'
  const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *;`;

  const result = await client.query(query, values);

  return result.rowCount === 1;
};

const get_records = async (table) => {
  const query = `SELECT * FROM ${table};`;

  const result = await client.query(query);

  return result.rows;
};

const query_db = async (query) => {
  const result = await client.query(query);

  return { result: result.rows };
};

module.exports = { add_record, get_records, query_db };
