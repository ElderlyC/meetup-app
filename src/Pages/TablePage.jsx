import React from "react";
import { Link, useParams } from "react-router-dom";
import TestCounter from "../Components/TestCounter";
import Rocks from "../Components/Rocks";

function TablePage() {
  const params = useParams();

  return (
    <div>
      TablePage (3) {params.eventId}
      <Rocks />
      <TestCounter />
      <button>
        <Link to={"/Meetups-List"}>Go to Meetups List</Link>
      </button>
    </div>
  );
}

export default TablePage;
