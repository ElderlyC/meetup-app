import React from "react";

const TablePreview = () => {
  const DUMMY_TABLE = [4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      TablePreview
      <div>MON TUE WED THU FRI SAT SUN</div>
      <div>
        {DUMMY_TABLE.map((e) => (
          <button>{e}</button>
        ))}
      </div>
    </div>
  );
};

export default TablePreview;
