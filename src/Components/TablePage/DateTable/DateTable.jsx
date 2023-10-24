import React from "react";
import DateButton from "./DateButton";
import classes from "./DateTable.module.css";

const DateTable = () => {
  const number = 5;
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
      <DateButton number={number} />
    </div>
  );
};

export default DateTable;
