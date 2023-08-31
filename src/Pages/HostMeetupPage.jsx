import React from "react";
import UserIdentifiers from "../Components/UserIdentifiers/UserIdentifiers";
import GreenButton from "../Components/GreenButton/GreenButton";
import MeetupsListButton from "../Components/MeetupsListButton/MeetupsListButton";

function HostMeetupPage() {
  const handleUserInfo = () => {
    //set localStorage to UserIdentifiers props
  };
  return (
    <div>
      HostMeetupPage (1)
      <UserIdentifiers />
      <div>
        <GreenButton
          url="/Meetup-Settings"
          pageName="Host a New Meetup! (Meetup Settings)"
          onClick={handleUserInfo}
        />
        <MeetupsListButton />
      </div>
    </div>
  );
}

export default HostMeetupPage;
