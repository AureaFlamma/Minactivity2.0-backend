import { query } from "../index.js";

export async function getTimestamps() {
  const timestamps = await query(`SELECT * FROM timestamps`);
  console.log(timestamps.rows);
  return timestamps.rows;
  // console.log("it gets thru to the script");
}
// getTimestamps();

export default getTimestamps;
