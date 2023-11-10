import React from "react";
import classes from "./TableHeader.module.css";

const TableHeader = ({ eventData }) => {
  return (
    <div className={classes.header}>
      <h1>{eventData?.title}</h1>
      {eventData ? (
        <>
          <h2>Start Time: {eventData?.startTime}</h2>
          <h2>Location: {eventData?.location}</h2>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TableHeader;
