import React, { useState } from "react";
import GreenLinkButton from "../../GreenLinkButton/GreenLinkButton";
import DateSelection from "../DateSelection/DateSelection";
import { getDatesInRange } from "../../SharedFunctions";
import classes from "./SettingsForm.module.css";

const SettingsForm = ({
  onDateChange,
  onTitleChange,
  link,
  title,
  tableDates,
  host,
  userInfo,
}) => {
  const [blur, setBlur] = useState(false);

  const handleTitleInputChange = (e) => {
    onTitleChange(e.target.value);
  };

  const sendTableData = () => {
    // send all data, link, etc to firebase
    const dateArray = getDatesInRange(
      tableDates.start,
      tableDates.end,
      tableDates.type
    );

    const data = {
      host,
      title,
      tableDates,
      dateArray,
      startTime: document.getElementById("startTime").value,
      location: document.getElementById("location").value,
      description: document.getElementById("description").value,
      members: [{ name: host, icon: userInfo.icon, colour: userInfo.colour }],
    };

    fetch(
      "https://meetup-mannaja-default-rtdb.firebaseio.com/meetups/" +
        link +
        ".json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Server responds with {name: randomId}
        console.log("SENT! Response from server:", data);
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
    const hostedArray = JSON.parse(localStorage.getItem("host")) || [];
    hostedArray.push(link);
    localStorage.setItem("host", JSON.stringify(hostedArray));
  };

  const handleBlur = () => {
    if (title !== "") {
      setBlur(true);
    }
  };

  return (
    <>
      <form id="settings-form" className={classes.form}>
        <div className={classes.pair}>
          <label>Meetup Title</label>
          <input
            id="title"
            onChange={handleTitleInputChange}
            value={title}
            onBlur={handleBlur}
            disabled={blur}
            autoFocus
            required
          />
        </div>
        <div className={classes.pair}>
          <label>Start Time</label>
          <input id="startTime" type="time" defaultValue={"18:00"} />
        </div>

        <div className={classes.pair}>
          <label>Location</label>
          <input id="location" placeholder="e.g. Jon's House" />
        </div>
        <div className={classes.dates}>
          <DateSelection onDateChange={onDateChange} />
        </div>

        <div className={classes.pair}>
          <label>Description</label>
          <textarea
            id="description"
            placeholder="Activities, what to bring, other specific details about the meetup, etc."
            cols="40"
            rows="3"
            className={classes.description}
          ></textarea>
        </div>
        <div className={classes.done}>
          {title ? (
            <GreenLinkButton
              url={`../${link}`}
              pageName={"Done"}
              onClick={sendTableData}
            />
          ) : (
            <p>You need a title!</p>
          )}
        </div>
      </form>
    </>
  );
};

export default SettingsForm;
