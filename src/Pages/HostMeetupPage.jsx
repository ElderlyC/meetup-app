import React, { useState } from "react";
import UserIdentifiers from "../Components/UserIdentifiers/UserIdentifiers";
import GreenLinkButton from "../Components/GreenLinkButton/GreenLinkButton";
import MeetupsListButton from "../Components/MeetupsListButton/MeetupsListButton";

function HostMeetupPage() {
  const [userData, setUserData] = useState();
  const [inputsEmpty, setInputsEmpty] = useState();
  const [clicked, setClicked] = useState();

  const handleDataChange = (data) => {
    setUserData(data);
    if (data?.title === "" || data?.name === "") {
      setInputsEmpty(true);
    } else {
      setInputsEmpty(false);
    }
  };

  const handleInfoSave = () => {
    setClicked(true);
    console.log("Set storage with userData", userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
  };

  return (
    <div>
      Host your Meetup
      <UserIdentifiers onChangeData={handleDataChange} titleDisabled={false} />
      <GreenLinkButton
        url="/Meetup-Settings"
        pageName="Host a New Meetup! (Meetup Settings)"
        onClick={handleInfoSave}
        disable={inputsEmpty}
      />
      <div>
        <MeetupsListButton />
      </div>
      {inputsEmpty && clicked && (
        <p>Remember to input both a name and a title!</p>
      )}
    </div>
  );
}

export default HostMeetupPage;
