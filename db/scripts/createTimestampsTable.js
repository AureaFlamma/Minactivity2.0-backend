import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS timestamps (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, day_name TEXT, day INT, month TEXT, year INT, date TEXT, day_number INT );`;

async function createEmailsTable() {
  const res = await query(sqlString);
  console.log(res);
  console.log("created timestamps table");
}

createEmailsTable();
