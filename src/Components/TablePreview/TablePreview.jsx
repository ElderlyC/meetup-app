import React from "react";
import classes from "./TablePreview.module.css";

const TablePreview = ({ dateData }) => {
  console.log(dateData);
  const DUMMY_TABLE = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const columns = 7; // Number of columns

  const rows = Math.ceil(DUMMY_TABLE.length / columns); // Calculate the number of rows

  // Create an array of arrays to represent rows and columns
  const tableMatrix = Array.from({ length: rows }, (_, rowIndex) =>
    DUMMY_TABLE.slice(rowIndex * columns, (rowIndex + 1) * columns)
  );

  const dayHeaders = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <div className={classes.container}>
      Meetup Table Preview
      <div className={classes.table}>
        {dayHeaders.map((cell) => (
          <button key={cell} className={classes.dayHeader}>
            {cell}
          </button>
        ))}
        {tableMatrix.map((row, rowIndex) => (
          <div key={rowIndex} className={classes.rows}>
            {row.map((cell) => (
              <button
                key={cell}
                className={classes.tableButton}
                style={{
                  backgroundColor: cell > 5 && cell < 10 ? "" : "darkgrey",
                }}
              >
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
