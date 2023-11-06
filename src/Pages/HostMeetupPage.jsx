import React, { useState } from "react";
import UserIdentifiers from "../Components/UserIdentifiers/UserIdentifiers";
import GreenLinkButton from "../Components/GreenLinkButton/GreenLinkButton";
import MeetupsListButton from "../Components/MeetupsListButton/MeetupsListButton";
import classes from "./HostMeetupPage.module.css";

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
    <div className={classes.container}>
      <p className={classes.title}>Host your Meetup</p>
      <UserIdentifiers onChangeData={handleDataChange} titleDisabled={false} />
      <GreenLinkButton
        url="/Meetup-Settings"
        pageName="Host a New Meetup!"
        onClick={handleInfoSave}
        disable={inputsEmpty}
      />
      <div style={{ marginTop: "-10px" }}>
        <MeetupsListButton />
      </div>
      {inputsEmpty && clicked && (
        <p className={classes.error}>
          Remember to input both a name and a title!
        </p>
      )}
    </div>
  );
}

export default HostMeetupPage;
