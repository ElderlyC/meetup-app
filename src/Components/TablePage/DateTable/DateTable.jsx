import React from "react";
import DateButton from "./DateButton";
import { getNDaysLater } from "../../SharedFunctions";
import classes from "./DateTable.module.css";

const DateTable = ({ tableData }) => {
  const dates = tableData?.tableDates;
  console.log(dates);

  function getDaysInRange(range) {
    const startDate = new Date(range.start);
    const endDate = new Date(range.end);
    const days = [];

    while (startDate <= endDate) {
      days.push(startDate.toISOString().split("T")[0]);
      startDate.setDate(startDate.getDate() + 1);
    }

    return days;
  }

  const dateRange = {
    end: dates?.end,
    start: dates?.start,
    type: dates?.type,
  };
  const daysInRange = getDaysInRange(dateRange);
  console.log(daysInRange);

  const date = getNDaysLater(dateRange.end, 10);
  if (date) {
    console.log(date.toISOString());
  }
  console.log(date);
  console.log("Invalid Date");
  console.log(date === "Invalid Date");

  const dayHeaders = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <div>
      <div>
        {dayHeaders.map((cell) => (
          <button key={cell} className={classes.dayHeader}>
            {cell}
          </button>
        ))}
      </div>
      <DateButton number={5} />
    </div>
  );
};

export default DateTable;
