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

function TablePage() {
  const params = useParams();

  return (
    <div>
      TablePage (3) {params.eventId}
      <div id="1stcol">
        <UserInfo />
        <MeetupsListButton />
      </div>
      <div id="2col">
        {/* <JoinMeetupModal /> */}
        <TableHeader />
        <DateTable />
      </div>
      <div id="3col">
        <SettingsButton />
        <MembersList />
        <MeetupDay />
      </div>
      {/* <Rocks />
      <TestCounter /> */}
    </div>
  );
}

export default TablePage;
