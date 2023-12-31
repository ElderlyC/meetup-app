import React, { useState, useEffect } from "react";
import { addMember } from "../Components/SharedFunctions";
import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import MeetupsListButton from "../Components/MeetupsListButton/MeetupsListButton";
import UserInfo from "../Components/TablePage/UserInfo/UserInfo";
import ChangeUser from "../Components/TablePage/ChangeUser/ChangeUser";
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

  const [eventData, setEventData] = useState();

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const isHost = localStorage.getItem("host")?.includes(link) || null;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (userInfo && eventData) {
      const existingMember = eventData.members.find(
        (member) => member.name === userInfo.name
      );
      if (!existingMember && !isHost) {
        addMember(eventData, link, userInfo);
      } else if (!existingMember && isHost) {
        localStorage.setItem("userInfo", JSON.stringify(eventData.members[0]));
        setUserInfo(eventData.members[0]);
      }
    }
  }, [eventData, link, userInfo, isHost]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyALogs6dO87zJEjLihG7WIYyMks-1Jv-DA",
      authDomain: "meetup-mannaja.firebaseapp.com",
      databaseURL: "https://meetup-mannaja-default-rtdb.firebaseio.com",
      projectId: "meetup-mannaja",
      storageBucket: "meetup-mannaja.appspot.com",
      messagingSenderId: "693531976064",
      appId: "1:693531976064:web:39b7e22af956890b9f6165",
    };

    firebase.initializeApp(firebaseConfig);
    const eventRef = firebase.database().ref(`/meetups/${link}`);

    // Attach a listener to the eventRef
    eventRef.on("value", (snapshot) => {
      const eventData = snapshot.val();
      setEventData(eventData);
      setLoaded(true);
    });
    // Detach the listener when the component unmounts
    return () => {
      eventRef.off("value");
    };
  }, [link]);

  return (
    <>
      {loaded ? (
        <div className={classes.box}>
          {!userInfo && (
            <JoinMeetupModal
              titleDisabled={true}
              eventData={eventData}
              link={link}
            />
          )}
          {userInfo && (
            <div className={classes.container}>
              <div className={classes.col1}>
                <UserInfo data={userInfo} />
                <div>
                  <ChangeUser />
                  <MeetupsListButton />
                </div>
              </div>
              <div className={classes.col2}>
                <TableHeader eventData={eventData} />
                <DateTable eventData={eventData} link={link} />
                {eventData && (
                  <div className={classes.description}>
                    <p>{eventData.description}</p>
                  </div>
                )}
              </div>
              <div className={classes.col3}>
                {isHost && (
                  <SettingsButton className={classes.settings} link={link} />
                )}
                <div className={classes.meetInfo}>
                  <div className={classes.meetDay}>
                    <MeetupDay eventData={eventData} link={link} />
                  </div>
                  <div className={classes.list}>
                    <MembersList eventData={eventData} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default TablePage;
