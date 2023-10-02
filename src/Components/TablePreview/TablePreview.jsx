import React from "react";
import classes from "./TablePreview.module.css";

const TablePreview = ({ dateData }) => {
  console.log(dateData);
  console.log();

  const dateTable = [];
  const currentDate = new Date(dateData?.start);
  const startDayNum = currentDate.getDay();
  const daysUntilMonday = startDayNum === 0 ? 6 : startDayNum - 1;
  // ^ index of the first selected day in dateTable
  currentDate.setDate(currentDate.getDate() - daysUntilMonday);
  const firstMonth = currentDate.toLocaleDateString("en-GB", { month: "long" });

  const endDate = new Date(dateData?.end);
  const secondMonth = endDate.toLocaleDateString("en-GB", { month: "long" });
  const endDayNum = endDate.getDay();
  const daysUntilSunday = endDayNum === 0 ? 0 : 7 - endDayNum;
  // ^ index (negative) of the end selected day in dateTable
  endDate.setDate(endDate.getDate() + daysUntilSunday);

  while (currentDate <= endDate) {
    dateTable.push(currentDate.getDate());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // add in the days mon - start, end - sun
  console.log(dateTable);
  console.log(dateTable.slice(daysUntilMonday, -1 * daysUntilSunday));

  const columns = 7; // Number of columns

  const rows = Math.ceil(dateTable.length / columns); // Calculate the number of rows

  // Create an array of arrays to represent rows and columns
  const tableMatrix = Array.from({ length: rows }, (_, rowIndex) =>
    dateTable.slice(rowIndex * columns, (rowIndex + 1) * columns)
  );

  const dayHeaders = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <div className={classes.container}>
      Meetup Table Preview
      <div className={classes.table}>
        <div>
          {dayHeaders.map((cell) => (
            <button key={cell} className={classes.dayHeader}>
              {cell}
            </button>
          ))}
        </div>
        {tableMatrix.map((row, rowIndex) => (
          <div key={rowIndex} className={classes.rows}>
            {row.map((cell, index) => (
              <button
                key={cell}
                className={classes.tableButton}
                style={{
                  backgroundColor:
                    (rowIndex === 0 && index < daysUntilMonday) ||
                    (rowIndex === rows - 1 && index > 6 - daysUntilSunday)
                      ? "darkgrey"
                      : "",
                  position: "relative",
                }}
              >
                {index === 0 && rowIndex === 0 && (
                  <span className={classes.monthLabel}>{firstMonth}</span>
                )}
                {cell === 1 && (
                  <span className={classes.monthLabel}>{secondMonth}</span>
                )}
                {cell === 1 && rowIndex >= 5 && (
                  <span className={classes.monthLabel}>test</span>
                )}
                {cell}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablePreview;
