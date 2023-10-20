import React from "react";

const TableHeader = ({ tableData }) => {
  return (
    <div>
      <h1>{tableData?.title}</h1>
      <h2>Start Time: {tableData?.startTime}</h2>
      <h2>Location: {tableData?.location}</h2>
    </div>
  );
};

export default TableHeader;
