import React from "react";
import { Link } from "react-router-dom";
import classes from "./GreenLinkButton.module.css";

function GreenLinkButton({ url, pageName, onClick, disable }) {
  return (
    <button onClick={onClick} className={classes["big-green-button"]}>
      <Link className={classes.link} to={disable ? "" : url}>
        {pageName}
      </Link>
    </button>
  );
}

export default GreenLinkButton;
