export function getNDaysLater(dateInput, days) {
  const nDaysLater = new Date(dateInput); // Create a Date object from dateRange.start
  nDaysLater.setDate(nDaysLater.getDate() + days); // Add n day to the date
  return nDaysLater; // Format the date
}
//.toISOString().split("T")[0];

export function getDatesInRange(startDate, endDate, type) {
  const dates = [];
  const currentDate = new Date(startDate);
  const lastDate = new Date(endDate);

  while (currentDate <= lastDate) {
    const dayOfWeek = currentDate.getDay();

    if (
      type === "Full Week" ||
      (type === "Weekdays" && dayOfWeek >= 1 && dayOfWeek <= 5) ||
      (type === "Weekend" && (dayOfWeek === 0 || dayOfWeek === 6)) ||
      (type === "Long Weekend" &&
        (dayOfWeek === 5 || dayOfWeek === 0 || dayOfWeek === 6))
    ) {
      dates.push({
        [currentDate.toISOString().split("T")[0]]: {
          attendees: ["placeholder"],
        },
      });
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
