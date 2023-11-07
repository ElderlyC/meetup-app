import React from "react";
import Icon from "../../Icon";

import classes from "./MembersList.module.css";

const MembersList = ({ eventData }) => {
  const memberListArray = eventData?.members?.slice();

  return (
    <div className={classes.container}>
      Members List:{" "}
      <ul>
        {memberListArray?.map((member) => {
          return (
            <div key={member.name} className={classes.member}>
              <Icon data={member} />
              <li style={{ color: member.colour }}>{member.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MembersList;
