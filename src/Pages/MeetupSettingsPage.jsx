import React from "react";
import { Link } from "react-router-dom";

function MeetupSettingsPage() {
  return (
    <div>
      MeetupSettingsPage (2)
      <button>
        <Link to={"/Table"}>Go to Table</Link>
      </button>
    </div>
  );
}

export default MeetupSettingsPage;
