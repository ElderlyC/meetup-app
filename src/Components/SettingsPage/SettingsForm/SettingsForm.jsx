import React, { useState } from "react";
import GreenButton from "../../GreenLinkButton/GreenLinkButton";
import DateSelection from "../DateSelection/DateSelection";

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

  const handleTitleInputChange = (e) => {
    onTitleChange(e.target.value);
  };

  const sendTableData = () => {
    // send all data, link, etc to firebase
    const data = { host, title, tableDates };
    fetch(
      "https://meetup-mannaja-default-rtdb.firebaseio.com/table/" +
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
        console.log("Response from server:", data);
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
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
          <input type="time" />
        </div>

        <div>
          <label>Location</label>
          <input />
        </div>

        <DateSelection onDateChange={onDateChange} />

        <div>
          <label>Meetup Description</label>
          <textarea
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
