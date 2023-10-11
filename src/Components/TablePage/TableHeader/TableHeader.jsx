import React from "react";

const TableHeader = () => {
  const title = JSON.parse(localStorage.getItem("userInfo"))?.title;
  return (
    <div>
      TableHeader
      <h1>{title}</h1>
      <h2>Start Time, Location</h2>
    </div>
  );
};

export default TableHeader;
