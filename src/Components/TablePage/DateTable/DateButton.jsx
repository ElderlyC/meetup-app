import React from "react";
import classes from "./DateTable.module.css";

const DateButton = ({ date, index, selected }) => {
  const isSelected = selected.some((dateObj) => {
    const dateKey = Object.keys(dateObj)[0];
    return dateKey === date;
  });

  const dateNumber = parseInt(date.slice(-2));
  const monthNumber = parseInt(date.slice(5, -2));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[monthNumber - 1];

  return (
    <button className={classes.tableButton} disabled={!isSelected}>
      {(dateNumber === 1 || index === 0) && (
        <span className={classes.monthLabel}>{monthName}</span>
      )}
      <p>{dateNumber}</p>
    </button>
  );
};

export default DateButton;
