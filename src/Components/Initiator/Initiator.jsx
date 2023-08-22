import React from "react";
import NameTitleInputs from "../NameTitleInputs/NameTitleInputs";
import PersonalIcon from "../PersonalIcon/PersonalIcon";
import GreenButton from "../GreenButton/GreenButton";
import MeetupsListButton from "../MeetupsListButton/MeetupsListButton";

function Initiator() {
  return (
    <div>
      Initiator
      <NameTitleInputs />
      <PersonalIcon />
      <GreenButton />
      {/* conditional render */}
      <MeetupsListButton />
    </div>
  );
}

export default Initiator;
