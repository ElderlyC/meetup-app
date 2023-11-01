import React from "react";
import Icon from "../../Icon";

import classes from "./MembersList.module.css";

const MembersList = ({ eventData }) => {
  console.log(eventData?.members);
  const memberListArray = eventData?.members.slice();
  console.log(memberListArray);

  return (
    <div>
      Members List:{" "}
      <ul>
        {memberListArray?.map((member) => {
          return (
            <div className={classes.member}>
              <Icon data={member} />
              <li key={member.name}>{member.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MembersList;
