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
    dateObject[date].attendees.push(name);
    console.log(dateObject);
    console.log(name);
    console.log(selected, updatedDateArray);
    // fetch(
    //   "https://meetup-mannaja-default-rtdb.firebaseio.com/meetups/" +
    //     link +
    //     "/dateArray.json",
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(updatedDateArray),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("SENT! Response from server:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error sending POST request:", error);
    //   });
  };

  return (
    <button
      className={classes.tableButton}
      disabled={!isSelected}
      onClick={handleDateClick}
    >
      {(dateNumber === 1 || index === 0) && (
        <span className={classes.monthLabel}>{monthName}</span>
      )}
      <p>{dateNumber}</p>
    </button>
  );
};

export default DateButton;
