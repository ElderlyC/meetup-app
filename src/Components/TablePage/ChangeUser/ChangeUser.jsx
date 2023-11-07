import React from "react";
import classes from "./ChangeUser.module.css";

const ChangeUser = () => {
  const handleChange = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <button onClick={handleChange} className={classes.change}>
      Change User
    </button>
  );
};

export default ChangeUser;
