import React from "react";
import classes from "./DateTable.module.css";

const DateButton = ({ date, index, selected, link }) => {
  const isSelected = selected.some((dateObj) => {
    const dateKey = Object.keys(dateObj)[0];
    return dateKey === date;
  });

  const dateNumber = parseInt(date.slice(-2));
  const monthNumber = parseInt(date.slice(5, -2));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[monthNumber - 1];

  const name = JSON.parse(localStorage.getItem("userInfo")).name;

  const handleDateClick = () => {
    //update selectedDatesArray, PUT into firebase
    const updatedDateArray = [...selected];
    const dateObject = updatedDateArray.find((obj) => obj.hasOwnProperty(date));

    //make sure the name isnt already there before adding to array (no dupes)
    if (dateObject[date].attendees.includes(name)) {
      dateObject[date].attendees = dateObject[date].attendees.filter(
        (attendee) => attendee !== name
      );
    } else {
      dateObject[date].attendees.push(name);
    }

    fetch(
      "https://meetup-mannaja-default-rtdb.firebaseio.com/meetups/" +
        link +
        "/dateArray.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDateArray),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log("SENT! Response from server:", data);
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
  };

  const dateObject = selected.find((obj) => obj.hasOwnProperty(date));
  const numberOfAttendees = dateObject
    ? dateObject[date]?.attendees.length - 1 || 0
    : "";

  //array of attendees for a given select date (minus the placeholder)
  //const attendees = dateObject ? dateObject[date]?.attendees.slice(1) : "";

  return (
    <button
      className={classes.tableButton}
      disabled={!isSelected}
      onClick={handleDateClick}
    >
      {(dateNumber === 1 || index === 0) && (
        <label className={classes.monthLabel}>{monthName}</label>
      )}
      <p className={classes.dateNumber}>{dateNumber}</p>
      <p className={classes.attendees}>
        {numberOfAttendees > 0 ? numberOfAttendees : ""}
      </p>
      {/* <p>{attendees}</p> */}
      {/* change this to an onHover  */}
    </button>
  );
};

export default DateButton;
