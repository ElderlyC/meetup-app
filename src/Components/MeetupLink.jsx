import React from "react";
import { Link } from "react-router-dom";
import classes from "./MeetupLink.module.css";

const MeetupLink = ({ link, event }) => {
  return (
    <tr className={classes.container}>
      <td className={classes.title}>
        <Link to={`/${link}`}>{event.title}</Link>
      </td>
      <td className={classes.host}>{event.host}</td>
      <td className={classes.location}>{event.location}</td>
      <td className={classes.startTime}>{event.startTime}</td>
      <td className={classes.meetupDay}>{event.meetupDay}</td>
      <td className={classes.status}>Upcoming</td>
    </tr>
  );
};

export default MeetupLink;
