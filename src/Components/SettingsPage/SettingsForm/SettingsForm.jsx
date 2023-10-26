import React, { useState } from "react";
import GreenButton from "../../GreenLinkButton/GreenLinkButton";
import DateSelection from "../DateSelection/DateSelection";
import { getDatesInRange } from "../../SharedFunctions";

const SettingsForm = ({
  onDateChange,
  onTitleChange,
  link,
  title,
  showInvite,
  tableDates,
  host,
}) => {
  const [blur, setBlur] = useState(false);

  console.log(tableDates, "tableDates");
  const start = tableDates?.start;
  const end = tableDates?.end;
  const type = tableDates?.type;
  const dateArray = getDatesInRange(start, end, type);
  console.log(dateArray, "dateArray");

  const handleTitleInputChange = (e) => {
    onTitleChange(e.target.value);
  };

  const sendTableData = () => {
    // send all data, link, etc to firebase

    const data = {
      host,
      title,
      tableDates,
      dateArray,
      startTime: document.getElementById("startTime").value,
      location: document.getElementById("location").value,
      description: document.getElementById("description").value,
      members: [host],
    };
    console.log("making data", data.dateArray);
    localStorage.setItem("tableData", JSON.stringify(data));
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
    localStorage.setItem(link, "host");
  };

  const handleBlur = () => {
    if (title !== "") {
      setBlur(true);
    }
    showInvite(true);
  };

  return (
    <>
      <form id="settings-form">
        <div>
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
        <div>
          <label>Start Time</label>
          <input id="startTime" type="time" defaultValue={"18:00"} />
        </div>

        <div>
          <label>Location</label>
          <input id="location" placeholder="e.g. Jon's House" />
        </div>

        <DateSelection onDateChange={onDateChange} />

        <div>
          <label>Meetup Description</label>
          <textarea
            id="description"
            placeholder="Activities, what to bring, other specific details about the meetup, etc."
            cols="40"
            rows="3"
          ></textarea>
        </div>

        {title ? (
          <GreenButton
            url={`../${link}`}
            pageName={"Done"}
            onClick={sendTableData}
          >
            Done!
          </GreenButton>
        ) : (
          <p>You need a title!</p>
        )}
      </form>
    </>
  );
};

export default SettingsForm;
