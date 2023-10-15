import React from "react";

const TableHeader = () => {
  // const tableData = JSON.parse(localStorage.getItem("tableData")) || "";
  const title = JSON.parse(localStorage.getItem("userInfo"))?.title;
  return (
    <div>
      TableHeader
      <h1>{title}</h1>
      <h2>Start Time: S</h2>
      <h2>Location: L</h2>
    </div>
  );
};

export default TableHeader;
