export function getNDaysLater(dateInput, days) {
  const nDaysLater = new Date(dateInput); // Create a Date object from dateRange.start
  nDaysLater.setDate(nDaysLater.getDate() + days); // Add n day to the date
  return nDaysLater; // Format the date
}
//.toISOString().split("T")[0];
