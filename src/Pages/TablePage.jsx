import React, { useState, useEffect } from "react";
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
  const link = params.eventId;

  const [tableData, setTableData] = useState();

  const [userInfo] = useState(JSON.parse(localStorage.getItem("userInfo")));

  useEffect(() => {
    fetch(
      "https://meetup-mannaja-default-rtdb.firebaseio.com/table/" +
        link +
        ".json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        setTableData(data);
      });
  }, [link]);

  return (
    <>
      TablePage (3) {params.eventId}
      {!userInfo && (
        <JoinMeetupModal titleDisabled={true} tableData={tableData} />
      )}
      {userInfo && (
        <div className={classes.container}>
          <div className={classes.col1}>
            <UserInfo data={userInfo} />
            <MeetupsListButton />
          </div>
          <div className={classes.col2}>
            <TableHeader tableData={tableData} />
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
      )}
    </>
  );
}

export default TablePage;
