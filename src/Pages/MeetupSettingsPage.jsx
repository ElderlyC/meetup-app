import React, { useState } from "react";
import SettingsForm from "../Components/SettingsPage/SettingsForm/SettingsForm";
import TablePreview from "../Components/SettingsPage/TablePreview/TablePreview";
import UserInvite from "../Components/SettingsPage/UserInvite/UserInvite";
import classes from "./MeetupSettingsPage.module.css";

function MeetupSettingsPage() {
  const storedInfo = localStorage.getItem("userInfo");
  const initialTitle = storedInfo ? JSON.parse(storedInfo).title : "";
  const host = storedInfo ? JSON.parse(storedInfo).name : "";

  const [tableDates, setTableDates] = useState();
  const [title, setTitle] = useState(initialTitle);
  const [link, setLink] = useState();
  const [showInvite, setShowInvite] = useState();

  const dateChangeHandler = (enteredDateData) => {
    setTableDates(enteredDateData);
  };

  const titleChangeHandler = (enteredTitle) => {
    setTitle(enteredTitle);
  };

  const handleSaveLink = (link) => {
    setLink(link);
  };

  const handleShowInvite = (show) => {
    setShowInvite(show);
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftCol}>
        <h1>Settings</h1>
        <SettingsForm
          onTitleChange={titleChangeHandler}
          onDateChange={dateChangeHandler}
          link={link}
          title={title}
          showInvite={handleShowInvite}
          tableDates={tableDates}
          host={host}
          userInfo={JSON.parse(storedInfo)}
        />
        
        
      </div>
      <div className={classes.rightCol}>
        
        <TablePreview dateData={tableDates} />
        {showInvite && <UserInvite title={title} saveLink={handleSaveLink} />}
      </div>
    </div>
  );
}

export default MeetupSettingsPage;
