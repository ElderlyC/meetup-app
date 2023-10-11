import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import TestCounter from "../Components/TestCounter";
// import Rocks from "../Components/Rocks";
import MeetupsListButton from "../Components/MeetupsListButton/MeetupsListButton";
import UserInfo from "../Components/TablePage/UserInfo/UserInfo";
import TableHeader from "../Components/TablePage/TableHeader/TableHeader";
import DateTable from "../Components/TablePage/DateTable/DateTable";
import SettingsButton from "../Components/TablePage/SettingsButton/SettingsButton";
import MembersList from "../Components/TablePage/MembersList/MembersList";
import MeetupDay from "../Components/TablePage/MeetupDay/MeetupDay";
import classes from "./TablePage.module.css";
import JoinMeetupModal from "../Components/TablePage/JoinMeetupModal/JoinMeetupModal";

function TablePage() {
  const params = useParams();

  const [userInfo] = useState(JSON.parse(localStorage.getItem("userInfo")));

  return (
    <>
      TablePage (3) {params.eventId}
      <div className={classes.container}>
        <div className={classes.col1}>
          <UserInfo data={userInfo} />
          <MeetupsListButton />
        </div>
        <div className={classes.col2}>
          {!userInfo && <JoinMeetupModal titleDisabled={true} />}

          <TableHeader />
          <DateTable />
        </div>
        <div className={classes.col3}>
          <SettingsButton />
          <MembersList />
          <MeetupDay />
        </div>
        {/* <Rocks />
    <TestCounter /> */}
      </div>
    </>
  );
}

export default TablePage;
