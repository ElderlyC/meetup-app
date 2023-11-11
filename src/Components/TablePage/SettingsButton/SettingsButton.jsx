import React from "react";
import { Link } from "react-router-dom";

const SettingsButton = ({ link }) => {
  return (
    <div>
      <button>
        <img alt="settings cog" />
        <Link to={"/Meetup-Settings/" + link}>Settings</Link>
      </button>
    </div>
  );
};

export default SettingsButton;
