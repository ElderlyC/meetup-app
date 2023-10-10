import React, { useState } from "react";
import { Link } from "react-router-dom";
import SettingsForm from "../Components/SettingsPage/SettingsForm/SettingsForm";
import TablePreview from "../Components/SettingsPage/TablePreview/TablePreview";
import UserInvite from "../Components/SettingsPage/UserInvite/UserInvite";
import classes from "./MeetupSettings.module.css";

function MeetupSettingsPage() {
  const [tableDates, setTableDates] = useState();
  const [title, setTitle] = useState();

  const dateChangeHandler = (enteredDateData) => {
    setTableDates(enteredDateData);
  };

  const titleChangeHandler = (enteredTitle) => {
    setTitle(enteredTitle);
  };
  return (
    <div className={classes.container}>
      <div className={classes.leftCol}>
        MeetupSettingsPage (2)
        <SettingsForm
          onTitleChange={titleChangeHandler}
          onDateChange={dateChangeHandler}
        />
        <UserInvite title={title} />
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
