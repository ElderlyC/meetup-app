import React from "react";
import DateButton from "./DateButton";
import classes from "./DateTable.module.css";

const DateTable = ({ tableData, link }) => {
  const dates = tableData?.tableDates;
  const selectedDatesArray = tableData?.dateArray;
  console.log(selectedDatesArray);

  const currentDate = new Date(dates?.start);
  const startDayNum = currentDate.getDay();
  const daysUntilMonday = startDayNum === 0 ? 6 : startDayNum - 1;
  // ^ index of the first selected day in dateTable
  currentDate.setDate(currentDate.getDate() - daysUntilMonday);

  const endDate = new Date(dates?.end);
  const endDayNum = endDate.getDay();
  const daysUntilSunday = endDayNum === 0 ? 0 : 7 - endDayNum;
  // ^ index (negative) of the end selected day in dateTable
  endDate.setDate(endDate.getDate() + daysUntilSunday);

  const calendarArray = [];
  while (currentDate <= endDate) {
    calendarArray.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
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
      <div>
        {calendarArray.map((date, index) => (
          <DateButton
            key={date}
            className={classes.tableButton}
            date={date}
            selected={selectedDatesArray}
            index={index}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default DateTable;
