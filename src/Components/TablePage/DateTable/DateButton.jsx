import React from "react";
import classes from "./DateTable.module.css";

const DateButton = ({ number }) => {
  return <button className={classes.tableButton}>{number}</button>;
};

export default DateButton;
