import React from "react";
import { Link } from "react-router-dom";

const SettingsButton = () => {
  return (
    <div>
      SettingsButton
      <button>
        <img alt="settings cog" />
        <Link to={"/Meetups-List"}>Meetups List</Link>
      </button>
    </div>
  );
};

export default SettingsButton;
