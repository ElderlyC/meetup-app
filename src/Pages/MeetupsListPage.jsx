import React from "react";
import { Link } from "react-router-dom";

function MeetupsListPage() {
  return (
    <div>
      MeetupsListPage (4)
      <button>
        <Link to={"/"}>Organise a NEW Meetup!</Link>
      </button>
    </div>
  );
}

export default MeetupsListPage;
