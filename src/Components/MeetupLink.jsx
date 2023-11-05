import React from "react";
import { Link } from "react-router-dom";
import classes from "./MeetupLink.module.css";

const MeetupLink = ({ link, event }) => {
  return (
    <div className={classes.container}>
      <p>
        <Link to={`/${link}`}>{event.title}</Link>
      </p>
      <p>{event.host}</p>
      <p>{event.location}</p>
      <p>{event.startTime}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default MeetupLink;
