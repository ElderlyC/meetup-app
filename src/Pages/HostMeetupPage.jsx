import React, { useState } from "react";
import UserIdentifiers from "../Components/UserIdentifiers/UserIdentifiers";
import GreenLinkButton from "../Components/GreenLinkButton/GreenLinkButton";
import MeetupsListButton from "../Components/MeetupsListButton/MeetupsListButton";

function HostMeetupPage() {
  const [userData, setUserData] = useState();

  const handleDataChange = (data) => {
    setUserData(data);
  };
  const handleInfoSave = () => {
    console.log("Set storage with userData", userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
  };
  return (
    <div>
      HostMeetupPage (1)
      <UserIdentifiers onChangeData={handleDataChange} titleDisabled={false} />
      <GreenLinkButton
        url="/Meetup-Settings"
        pageName="Host a New Meetup! (Meetup Settings)"
        onClick={handleInfoSave}
      />
      <MeetupsListButton />
    </div>
  );
}

export default HostMeetupPage;
