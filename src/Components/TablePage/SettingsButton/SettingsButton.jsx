import React from "react";
import SettingsCog from "../../../images/settingsCog.png";
import { Link } from "react-router-dom";
import classes from "./SettingsButton.module.css";

const SettingsButton = ({ link }) => {
  return (
    <Link className={classes.button} to={"/Meetup-Settings/" + link}>
      <img className={classes.cog} src={SettingsCog} alt="settings cog" />
      <span className={classes.link}>Settings</span>
    </Link>
  );
};

export default SettingsButton;
