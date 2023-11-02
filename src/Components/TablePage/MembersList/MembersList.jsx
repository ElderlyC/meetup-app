import React from "react";
import Icon from "../../Icon";

import classes from "./MembersList.module.css";

const MembersList = ({ eventData }) => {
  const memberListArray = eventData?.members.slice();

  return (
    <div>
      Members List:{" "}
      <ul>
        {memberListArray?.map((member) => {
          return (
            <div key={member.name} className={classes.member}>
              <Icon data={member} />
              <li>{member.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MembersList;
