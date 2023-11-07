import React from "react";
import Icon from "../../Icon";

import classes from "./UserInfo.module.css";

const UserInfo = ({ data }) => {
  return (
    <div className={classes.infoBox}>
      <label>Current User: </label>
      <div className={classes.username}>
        <span
          className={classes.name}
          style={{
            color: data?.colour,
          }}
        >
          {data?.name}
        </span>
      </div>
      <div className={classes.personalIcon}>
        <div className={classes.icon}>
          <Icon data={data} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
