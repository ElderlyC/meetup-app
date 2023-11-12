import React, { useState } from "react";
import { formatDate } from "./SharedFunctions";
import { Link } from "react-router-dom";
import expand from "../images/expand.png";
import deleteIcon from "../images/delete.png";
import classes from "./MeetupLink.module.css";

const MeetupLink = ({ link, event }) => {
  const [expanded, setExpand] = useState(false);

  const formattedDate = event && formatDate(event.meetupDay);
  const today = new Date().toISOString().split("T")[0];
  const status =
    event.meetupDay > today
      ? "Upcoming"
      : event.meetupDay === today
      ? "Today"
      : "Passed";

  const attendeesArray =
    (event &&
      event.dateArray
        .find((dateObject) => Object.keys(dateObject)[0] === event.meetupDay)
        [event.meetupDay].attendees.slice(1)) ||
    [];

  const handleEventDelete = () => {
    if (window.confirm("Are you sure you wish to delete this event?")) {
      const databaseURL =
        "https://meetup-mannaja-default-rtdb.firebaseio.com/meetups/" +
        link +
        ".json";
      fetch(databaseURL, {
        method: "DELETE",
      }).then(() => {
        const hosting = JSON.parse(localStorage.getItem("host"));
        const filteredArray = hosting.filter((event) => event !== link);
        localStorage.setItem("host", JSON.stringify(filteredArray));
        window.location.reload();
      });
    }
  };

  const handleExpand = () => {
    setExpand((p) => !p);
  };

  return (
    <>
      <tr className={classes.container}>
        <td className={classes.title}>
          <Link to={`/${link}`}>{event.title}</Link>
        </td>
        <td className={classes.host}>{event.host}</td>
        <td className={classes.location}>{event.location}</td>
        <td className={classes.startTime}>{event.startTime}</td>
        <td className={classes.meetupDay}>{formattedDate}</td>
        <td className={classes.status}>{status}</td>
        <td className={classes.tools}>
          <button className={classes.expandbtn} onClick={handleExpand}>
            <img className={classes.expand} src={expand} alt="expand" />
          </button>
          <button onClick={handleEventDelete}>
            <img className={classes.delete} src={deleteIcon} alt="delete" />
          </button>
        </td>
      </tr>
      {expanded && (
        <>
          <tr className={classes.attendees}>
            <td colSpan="7">
              Attendees:{" "}
              <span className={classes.names}>{attendeesArray.join(" ")}</span>
            </td>
          </tr>
          <tr className={classes.description}>
            <td colSpan="7">Description: {event.description}</td>
          </tr>
        </>
      )}
    </>
  );
};

export default MeetupLink;
