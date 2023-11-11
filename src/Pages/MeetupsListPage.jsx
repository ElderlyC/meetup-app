import React, { useState, useEffect } from "react";
import MeetupLink from "../Components/MeetupLink";
import classes from "./MeetupsListPage.module.css";
import GreenLinkButton from "../Components/GreenLinkButton/GreenLinkButton";

function MeetupsListPage() {
  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hostedArray = JSON.parse(localStorage.getItem("host")) || [];
    fetch("https://meetup-mannaja-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const hostedEvents =
          data &&
          Object.keys(data)
            .filter((key) => hostedArray.includes(key))
            .map((key) => ({
              [key]: data[key],
            }));
        setEvents(hostedEvents || []);
        setLoaded(true);
      });
  }, []);

  return (
    <div className={classes.container}>
      <h1>Meetup List - WORK IN PROGRESS</h1>
      <table className={classes.table}>
        <thead>
          <tr className={classes.headers}>
            <th className={classes.title}>Meetup</th>
            <th className={classes.host}>Host</th>
            <th className={classes.location}>Location</th>
            <th className={classes.startTime}>Time</th>
            <th className={classes.meetupDay}>Meetup Day</th>
            <th className={classes.status}>Status</th>
            <th className={classes.empty}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {events &&
            events.map((eventEntry) => {
              const [eventLink, eventData] = Object.entries(eventEntry)[0];
              return (
                <MeetupLink
                  key={eventLink}
                  link={eventLink}
                  event={eventData}
                  className={classes.links}
                />
              );
            })}
        </tbody>
      </table>
      {loaded && !events.length > 0 && <p>You have no hosted events!</p>}
      {!loaded && <p>Loading Events...</p>}

      <GreenLinkButton url="/" pageName="Organize a NEW Meetup!" />
    </div>
  );
}

export default MeetupsListPage;
