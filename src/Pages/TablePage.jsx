import React from "react";
import { useParams } from "react-router-dom";
// import TestCounter from "../Components/TestCounter";
// import Rocks from "../Components/Rocks";
import MeetupsListButton from "../Components/MeetupsListButton/MeetupsListButton";
import UserInfo from "../Components/SettingsPage/UserInfo/UserInfo";
// import JoinMeetupModal from "../Components/TablePage/JoinMeetupModal/JoinMeetupModal";
import TableHeader from "../Components/TablePage/TableHeader/TableHeader";
import DateTable from "../Components/TablePage/DateTable/DateTable";
import SettingsButton from "../Components/TablePage/SettingsButton/SettingsButton";
import MembersList from "../Components/TablePage/MembersList/MembersList";
import MeetupDay from "../Components/TablePage/MeetupDay/MeetupDay";
import classes from "./TablePage.module.css";

function TablePage() {
  const params = useParams();

  return (
    <>
      TablePage (3) {params.eventId}
      <div className={classes.container}>
        <div className={classes.col1}>
          <UserInfo />
          <MeetupsListButton />
        </div>
        <div className={classes.col2}>
          {/* <JoinMeetupModal /> */}
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
