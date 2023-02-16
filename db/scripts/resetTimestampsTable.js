import { query } from "../index.js";

async function resetTimestampsTable() {
  const res = await query(
    `DROP TABLE IF EXISTS timestamps; CREATE TABLE IF NOT EXISTS timestamps (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, day_name TEXT, day INT, month TEXT, year INT, date TEXT, miliseconds BIGINT );`
  );
  console.log(res);
}

resetTimestampsTable();
export default resetTimestampsTable;
