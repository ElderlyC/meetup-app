import React from "react";
import DateButton from "./DateButton";
import { getNDaysLater } from "../../SharedFunctions";
import classes from "./DateTable.module.css";

const DateTable = ({ tableData }) => {
  const dates = tableData?.tableDates;

  // const daysInRange = getDaysInRange(dateRange);

  const date = getNDaysLater(dates?.end, 10);
  if (date) {
    console.log(tableData);
    console.log(date.toString());
  }

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
