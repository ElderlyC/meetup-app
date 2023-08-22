import React from "react";
import { Link } from "react-router-dom";

function TablePage() {
  return (
    <div>
      TablePage (3)
      <button>
        <Link to={"/Meetups-List"}>Go to Meetups List</Link>
      </button>
    </div>
  );
}

export default TablePage;
