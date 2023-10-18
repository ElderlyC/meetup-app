import React from "react";

const TableHeader = ({ tableData }) => {
  const storedTable = localStorage.getItem("tableData");
  const table = storedTable ? JSON.parse(storedTable) : tableData;

  console.log(tableData, "header");

  return (
    <div>
      <h1>{table?.title}</h1>
      <h2>Start Time: {table?.startTime}</h2>
      <h2>Location: {table?.location}</h2>
    </div>
  );
};

export default TableHeader;
