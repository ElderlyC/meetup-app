import React from "react";
import { Link } from "react-router-dom";
import SettingsForm from "../Components/Settings/SettingsForm";
import TablePreview from "../Components/TablePreview/TablePreview";
import UserInvite from "../Components/UserInvite/UserInvite";

function MeetupSettingsPage() {
  return (
    <div>
      MeetupSettingsPage (2)
      <SettingsForm />
      <TablePreview />
      <UserInvite />
      <button>
        <Link to={"/Table"}>Go to Table</Link>
      </button>
    </div>
  );
}

export default MeetupSettingsPage;
