import React from "react";

import classes from "./UserInfo.module.css";

const faces = {
  reg: require("../../../images/faces/reg.png"),
  wide: require("../../../images/faces/wide.png"),
  sad: require("../../../images/faces/sad.png"),
  joy: require("../../../images/faces/joy.png"),
  alien: require("../../../images/faces/alien.png"),
  skeleton: require("../../../images/faces/skeleton.png"),
  cloud: require("../../../images/faces/cloud.png"),
  angry: require("../../../images/faces/angry.png"),
  clown: require("../../../images/faces/clown.png"),
  frog: require("../../../images/faces/frog.png"),
};

const UserInfo = ({ data }) => {
  return (
    <div className={classes.infoBox}>
      <div className={classes.username}>
        <label>Your Username: </label>
        <span>{data?.name}</span>
      </div>
      <div className={classes.personalIcon}>
        <label>Personal Icon: </label>
        <div className={classes.icon} style={{ backgroundColor: data?.colour }}>
          <img src={faces[data?.icon]} alt="Personal Icon" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
