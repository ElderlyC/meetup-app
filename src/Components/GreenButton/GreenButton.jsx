import React from "react";
import { Link } from "react-router-dom";
import classes from "./GreenButton.module.css";

function GreenButton({ url, pageName }) {
  return (
    <button className={classes["big-green-button"]}>
      <Link to={url}>{pageName}</Link>
    </button>
  );
}

export default GreenButton;
