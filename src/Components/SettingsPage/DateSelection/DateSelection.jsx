import React, { useEffect, useState } from "react";
import classes from "./DateSelection.module.css";

const DateSelection = ({ onDateChange }) => {
  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  const getNDaysLater = (dateInput, days) => {
    const nDaysLater = new Date(dateInput); // Create a Date object from dateRange.start
    nDaysLater.setDate(nDaysLater.getDate() + days); // Add 1 day to the date
    return nDaysLater.toISOString().split("T")[0]; // Format the date
  };

  const [dateRange, setDateRange] = useState({
    type: "Full Week",
    start: todayFormatted,
    end: getNDaysLater(todayFormatted, 27),
  });

  // Calculate the previous Monday
  const firstMonday = new Date(dateRange.start);
  const dayOfWeek = firstMonday.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const firstMondayFormatted = getNDaysLater(
    dateRange.start,
    -1 * daysUntilMonday
  );

  const handleDateChange = (identifier, value) => {
    setDateRange((prev) => {
      return { ...prev, [identifier]: value };
    });
  };

  useEffect(() => {
    onDateChange(dateRange);
    if (new Date(dateRange.end) < new Date(dateRange.start)) {
      setDateRange((prev) => {
        return { ...prev, end: getNDaysLater(dateRange.start, 1) };
      });
    }

    if (
      new Date(dateRange.end) >
      new Date(getNDaysLater(firstMondayFormatted, 27))
    ) {
      setDateRange((prev) => {
        return {
          ...prev,
          end: getNDaysLater(firstMondayFormatted, 27),
        };
      });
    }
  }, [dateRange, onDateChange, firstMondayFormatted]);

  return (
    <fieldset className={classes.field}>
      <legend className={classes.legend}>
        Specify the range of days to choose from
      </legend>
      <div>
        <label>Selection Type</label>
        <select
          value={dateRange.type}
          onChange={(event) => handleDateChange("type", event.target.value)}
        >
          <option>Full Week</option>
          <option>Weekdays</option>
          <option>Weekend</option>
          <option>Long Weekend (FSS)</option>
        </select>
      </div>

      <div>
        <label>Start of Range</label>
        <input
          type="date"
          value={dateRange.start}
          onChange={(event) => handleDateChange("start", event.target.value)}
          min={todayFormatted}
        />
      </div>

      <div>
        <label>End of Range</label>
        <input
          type="date"
          value={dateRange.end}
          onChange={(event) => handleDateChange("end", event.target.value)}
          min={getNDaysLater(dateRange.start, 1)}
          max={getNDaysLater(firstMondayFormatted, 27)}
        />
      </div>
    </fieldset>
  );
};

export default DateSelection;
