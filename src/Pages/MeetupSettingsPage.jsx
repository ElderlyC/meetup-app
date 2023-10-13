import React, { useState } from "react";
import { Link } from "react-router-dom";
import SettingsForm from "../Components/SettingsPage/SettingsForm/SettingsForm";
import TablePreview from "../Components/SettingsPage/TablePreview/TablePreview";
import UserInvite from "../Components/SettingsPage/UserInvite/UserInvite";
import classes from "./MeetupSettings.module.css";

function MeetupSettingsPage() {
  const storedInfo = localStorage.getItem("userInfo");
  const initialTitle = storedInfo ? JSON.parse(storedInfo).title : "";

  const [tableDates, setTableDates] = useState();
  const [title, setTitle] = useState(initialTitle);
  const [link, setLink] = useState();

  const dateChangeHandler = (enteredDateData) => {
    setTableDates(enteredDateData);
  };

  const titleChangeHandler = (enteredTitle) => {
    setTitle(enteredTitle);
  };

  const handleSaveLink = (link) => {
    setLink(link);
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftCol}>
        MeetupSettingsPage (2)
        <SettingsForm
          onTitleChange={titleChangeHandler}
          onDateChange={dateChangeHandler}
          link={link}
          title={title}
        />
        <UserInvite title={title} saveLink={handleSaveLink} />
        <button>
          <Link to={"/Table"}>Go to Table</Link>
        </button>
      </div>
      <div className={classes.rightCol}>
        <TablePreview dateData={tableDates} />
      </div>
    </div>
  );
}

export default MeetupSettingsPage;
