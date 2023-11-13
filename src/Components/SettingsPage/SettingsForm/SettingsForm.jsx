import React, { useEffect } from "react";
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
  eventData,
}) => {
  const handleTitleInputChange = (e) => {
    onTitleChange(e.target.value);
  };

  const sendTableData = () => {
    const datesUnchanged =
      eventData && tableDates
        ? Object.keys(tableDates).every(
            (key) => tableDates[key] === eventData.tableDates[key]
          )
        : false;
    const dateArray =
      eventData && datesUnchanged
        ? eventData.dateArray
        : getDatesInRange(tableDates.start, tableDates.end, tableDates.type);

    const members = eventData
      ? [...eventData.members]
      : [{ name: host, icon: userInfo.icon, colour: userInfo.colour }];
    const data = {
      host,
      title,
      tableDates,
      dateArray,
      startTime: document.getElementById("startTime").value,
      location: document.getElementById("location").value,
      description: document.getElementById("description").value,
      members,
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
    );

    const hostedArray = JSON.parse(localStorage.getItem("host")) || [];
    if (!hostedArray.includes(link)) {
      hostedArray.push(link);
    }
    localStorage.setItem("host", JSON.stringify(hostedArray));
  };

  useEffect(() => {
    if (eventData) {
      document.getElementById("startTime").value = eventData.startTime;
      document.getElementById("location").value = eventData.location;
      document.getElementById("description").value = eventData.description;
    }
  }, [eventData]);

  const dates = eventData?.tableDates;

  return (
    <>
      <form id="settings-form" className={classes.form}>
        <div className={classes.pair}>
          <label>Meetup Title</label>
          <input
            id="title"
            onChange={handleTitleInputChange}
            value={title}
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
          <DateSelection onDateChange={onDateChange} dates={dates} />
        </div>

        <div className={classes.pair}>
          <label className={classes.descLabel}>Description</label>
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
