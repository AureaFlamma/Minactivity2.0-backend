import { query } from "../index.js";

//TODO: Add day_number once satisfied this works.

export default async function addTimestamp(newTimestamp) {
  console.log("add Timestamp gets called");
  const timestamp = await query(
    `INSERT INTO timestamps (day_name, day, month, year, date, miliseconds ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [
      newTimestamp.dayName,
      newTimestamp.day,
      newTimestamp.month,
      newTimestamp.year,
      newTimestamp.date,
      newTimestamp.miliseconds,
    ]
  );
  return timestamp.rows;
}
