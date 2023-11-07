import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MeetupLink from "../Components/MeetupLink";
import classes from "./MeetupsListPage.module.css";

function MeetupsListPage() {
  const [events, setEvents] = useState([]);

  // should only show the events that you are the host of (check localStorage) !!!

  useEffect(() => {
    fetch("https://meetup-mannaja-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
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
          </tr>
        </thead>
        <tbody>
          {events &&
            Object.keys(events).map((event) => (
              <MeetupLink
                key={event}
                link={event}
                event={events[event]}
                className={classes.links}
              />
            ))}
        </tbody>
      </table>

      <button>
        <Link to="/">Organize a NEW Meetup!</Link>
      </button>
    </div>
  );
}

export default MeetupsListPage;
