import React from "react";
import Icon from "../../Icon";

import classes from "./UserInfo.module.css";

const UserInfo = ({ data }) => {
  return (
    <div className={classes.infoBox}>
      <div className={classes.username}>
        <label>Your Username: </label>
        <span style={{ color: data?.colour }}>{data?.name}</span>
      </div>
      <div className={classes.personalIcon}>
        <label>Personal Icon: </label>
        <Icon data={data} />
      </div>
    </div>
  );
};

export default UserInfo;
