import { query } from "../index.js";

//TODO: Add day_number once satisfied this works.

export default async function addTimestamp(newTimestamp) {
  const timestamp = await query(
    `INSERT INTO timestamps (day_name, day, month, year, date ) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [
      newTimestamp.dayName,
      newTimestamp.day,
      newTimestamp.month,
      newTimestamp.year,
      newTimestamp.date.toString(),
    ]
  );
  return timestamp.rows;
}
