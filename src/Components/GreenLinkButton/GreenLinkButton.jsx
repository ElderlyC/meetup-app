import React from "react";
import { Link } from "react-router-dom";
import classes from "./GreenLinkButton.module.css";

function GreenLinkButton({ url, pageName, onClick }) {
  return (
    <button onClick={onClick} className={classes["big-green-button"]}>
      <Link to={url}>{pageName}</Link>
    </button>
  );
}

export default GreenLinkButton;
