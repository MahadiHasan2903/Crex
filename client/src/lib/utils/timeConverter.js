export function convertTimestampToFormattedDate(timestamp) {
  // Convert timestamp to milliseconds
  const timestampMs = parseInt(timestamp);

  // Create a Date object
  const date = new Date(timestampMs);

  // Define days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get day, month, and year
  const day = daysOfWeek[date.getUTCDay()];
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getUTCFullYear();

  // Create formatted date string
  const formattedDate = `${day}, ${date.getUTCDate()} ${month} ${year}`;

  // Return the formatted date
  return formattedDate;
}
