import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

  const storedTable = localStorage.getItem("tableData");
  const table = storedTable ? JSON.parse(storedTable) : tableData;

  const isHost = localStorage.getItem(link);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isHost) {
      fetch(
        "https://meetup-mannaja-default-rtdb.firebaseio.com/table/" +
          link +
          ".json"
      )
        .then((response) => response.json())
        .then((data) => {
          setTableData(data);
        });
    }
    setLoaded(true);
  }, [link, userInfo, isHost]);

  return (
    <>
      {loaded && (
        <div className={classes.box}>
          TablePage (3) {params.eventId}
          {!userInfo && (
            <JoinMeetupModal titleDisabled={true} tableData={table} />
          )}
          {userInfo && (
            <div className={classes.container}>
              <div className={classes.col1}>
                <UserInfo data={userInfo} />
                <MeetupsListButton />
              </div>
              <div className={classes.col2}>
                <TableHeader tableData={table} />
                <DateTable />
              </div>
              <div className={classes.col3}>
                {isHost && <SettingsButton className={classes.settings} />}
                <MembersList />
                <MeetupDay />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default TablePage;
