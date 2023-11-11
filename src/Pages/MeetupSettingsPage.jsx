import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SettingsForm from "../Components/SettingsPage/SettingsForm/SettingsForm";
import TablePreview from "../Components/SettingsPage/TablePreview/TablePreview";
import UserInvite from "../Components/SettingsPage/UserInvite/UserInvite";
import classes from "./MeetupSettingsPage.module.css";

function MeetupSettingsPage() {
  const eventURL = useParams()["*"];

  const storedInfo = localStorage.getItem("userInfo");
  const initialTitle = storedInfo ? JSON.parse(storedInfo).title : "";
  const host = storedInfo ? JSON.parse(storedInfo).name : "";

  const [tableDates, setTableDates] = useState();
  const [title, setTitle] = useState(initialTitle);
  const [link, setLink] = useState();
  const [eventData, setEventData] = useState();
  const [loaded, setLoaded] = useState(false);

  const dateChangeHandler = (enteredDateData) => {
    setTableDates(enteredDateData);
  };

  const titleChangeHandler = (enteredTitle) => {
    setTitle(enteredTitle);
  };

  const handleSaveLink = (link) => {
    setLink(link);
  };

  useEffect(() => {
    if (eventURL) {
      fetch(
        "https://meetup-mannaja-default-rtdb.firebaseio.com/meetups/" +
          eventURL +
          ".json"
      )
        .then((response) => response.json())
        .then((data) => {
          setEventData(data);
          setLoaded(true);
          setTitle(data.title);
        });
      setLink(eventURL);
    } else {
      setLoaded(true);
    }
  }, [eventURL]);

  return (
    <div className={classes.container}>
      <h1>Settings</h1>
      {!loaded && <p>Loading...</p>}
      {loaded && (
        <div>
          <div className={classes.cols}>
            <div className={classes.leftCol}>
              <SettingsForm
                onTitleChange={titleChangeHandler}
                onDateChange={dateChangeHandler}
                link={eventURL || link}
                title={title}
                tableDates={tableDates}
                host={host}
                userInfo={JSON.parse(storedInfo)}
                eventData={eventData}
              />
            </div>
            <div className={classes.rightCol}>
              <TablePreview dateData={tableDates} />
              <UserInvite
                title={title}
                saveLink={handleSaveLink}
                eventURL={eventURL}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeetupSettingsPage;
