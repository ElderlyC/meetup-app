import React from "react";
import { Link } from "react-router-dom";
import expand from "../images/expand.png";
import deleteIcon from "../images/delete.png";
import classes from "./MeetupLink.module.css";

const MeetupLink = ({ link, event }) => {
  const handleEventDelete = () => {
    // alert("Are you sure?", "Yes");
    const databaseURL =
      "https://meetup-mannaja-default-rtdb.firebaseio.com/meetups/" +
      link +
      ".json";
    fetch(databaseURL, {
      method: "DELETE",
    }).then(() => {
      window.location.reload();
    });

    const hosting = JSON.parse(localStorage.getItem("host"));
    const filteredArray = hosting.filter((event) => event !== link);
    console.log(filteredArray);
    localStorage.setItem("host", JSON.stringify(filteredArray));
  };

  const handleExpand = () => {
    console.log("drop it like its hot", event);
  };

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
      <td className={classes.tools}>
        <button onClick={handleExpand}>
          <img className={classes.expand} src={expand} alt="expand" />
        </button>
        <button onClick={handleEventDelete}>
          <img className={classes.delete} src={deleteIcon} alt="delete" />
        </button>
      </td>
    </tr>
  );
};

export default MeetupLink;
