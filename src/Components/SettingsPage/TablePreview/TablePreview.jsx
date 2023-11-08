import React from "react";
import classes from "./TablePreview.module.css";

const TablePreview = ({ dateData }) => {
  const dayHeaders = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dateTable = [];
  const currentDate = new Date(dateData?.start);
  const startDayNum = currentDate.getDay();
  const daysUntilMonday = startDayNum === 0 ? 6 : startDayNum - 1; // index of the first selected day in dateTable
  currentDate.setDate(currentDate.getDate() - daysUntilMonday);
  const firstMonth = currentDate.toLocaleDateString("en-GB", { month: "long" });

  const endDate = new Date(dateData?.end);
  const secondMonth = endDate.toLocaleDateString("en-GB", { month: "long" });
  const endDayNum = endDate.getDay();
  const daysUntilSunday = endDayNum === 0 ? 0 : 7 - endDayNum; // index (negative) of the end selected day in dateTable
  endDate.setDate(endDate.getDate() + daysUntilSunday);

  while (currentDate <= endDate) {
    dateTable.push(currentDate.getDate());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const columns = 7;
  const rows = Math.ceil(dateTable.length / columns);
  const tableMatrix = Array.from({ length: rows }, (_, rowIndex) =>
    dateTable.slice(rowIndex * columns, (rowIndex + 1) * columns)
  );

  return (
    <div className={classes.container}>
      <p className={classes.title}>Meetup Table Preview</p>
      <div className={classes.table}>
        <div className={classes.headers}>
          {dayHeaders.map((cell) => (
            <button key={cell} className={classes.dayHeader}>
              {cell}
            </button>
          ))}
        </div>
        {tableMatrix.map((row, rowIndex) => (
          <div key={rowIndex} className={classes.rows}>
            {row.map((cell, index) => {
              const disableByType =
                (dateData.type === "Weekend" &&
                  (index === 0 ||
                    index === 1 ||
                    index === 2 ||
                    index === 3 ||
                    index === 4)) ||
                (dateData.type === "Weekdays" &&
                  (index === 5 || index === 6)) ||
                (dateData.type === "Long Weekend (FSS)" &&
                  (index === 0 || index === 1 || index === 2 || index === 3));
              return (
                <button
                  key={cell}
                  className={classes.tableButton}
                  disabled={
                    (rowIndex === 0 && index < daysUntilMonday) ||
                    (rowIndex === rows - 1 && index > 6 - daysUntilSunday) ||
                    disableByType
                      ? true
                      : false
                  }
                >
                  {index === 0 && rowIndex === 0 && (
                    <span className={classes.monthLabel}>{firstMonth}</span>
                  )}
                  {cell === 1 && (
                    <span className={classes.monthLabel}>{secondMonth}</span>
                  )}
                  {cell}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablePreview;
