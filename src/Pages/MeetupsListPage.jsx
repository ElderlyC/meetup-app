import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MeetupLink from "../Components/MeetupLink";
import classes from "./MeetupsListPage.module.css";

function MeetupsListPage() {
  const [events, setEvents] = useState([]);

  const headerArray = [
    "Meetup",
    "Host",
    "Location",
    "Time",
    "Meetup Day",
    "Status",
  ];

  // should only show the events that i am the host of (check localStorage) !!!

  useEffect(() => {
    fetch("https://meetup-mannaja-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div>
      <h1>MeetupsListPage (4) WORK IN PROGRESS</h1>
      {headerArray.map((heading) => (
        <span key={heading} className={classes.headers}>
          {heading}
        </span>
      ))}
      {events &&
        Object.keys(events).map((event) => (
          <MeetupLink key={event} link={event} event={events[event]} />
        ))}
      <button>
        <Link to={"/"}>Organise a NEW Meetup!</Link>
      </button>
    </div>
  );
}

export default MeetupsListPage;
