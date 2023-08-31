import React from "react";
import { Link } from "react-router-dom";

function GreenButton({ url, pageName }) {
  return (
    <button>
      <Link to={url}>{pageName}</Link>
    </button>
  );
}

export default GreenButton;
