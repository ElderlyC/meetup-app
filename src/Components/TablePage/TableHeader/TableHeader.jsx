import React from "react";
import classes from "./TableHeader.module.css";

const TableHeader = ({ tableData }) => {
  return (
    <div className={classes.header}>
      <h1>{tableData?.title}</h1>
      <h2>Start Time: {tableData?.startTime}</h2>
      <h2>Location: {tableData?.location}</h2>
    </div>
  );
};

export default TableHeader;
