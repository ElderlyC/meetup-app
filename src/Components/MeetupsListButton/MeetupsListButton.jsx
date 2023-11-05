import React from "react";
import { Link } from "react-router-dom";
import classes from "./MeetupsListButton.module.css";

function MeetupsListButton() {
  return (
    <button className={classes.MLbutton}>
      <Link className={classes.link} to={"/Meetups-List"}>
        Meetups List
      </Link>
    </button>
  );
}

export default MeetupsListButton;
