import React, { useState } from "react";
import { Link } from "react-router-dom";
import SettingsForm from "../Components/Settings/SettingsForm";
import TablePreview from "../Components/TablePreview/TablePreview";
import UserInvite from "../Components/UserInvite/UserInvite";
import classes from "./MeetupSettings.module.css";

function MeetupSettingsPage() {
  const [tableDates, setTableDates] = useState("test");
  return (
    <div className={classes.container}>
      <div className={classes.leftCol}>
        MeetupSettingsPage (2)
        <SettingsForm />
        <UserInvite />
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
