import React, { useEffect, useState } from "react";
import GreenButton from "../../GreenButton/GreenButton";
import DateSelection from "../DateSelection/DateSelection";

const SettingsForm = ({ onDateChange, onTitleChange }) => {
  const storedTitle = localStorage.getItem("link");

  const [title, setTitle] = useState();
  const [blur, setBlur] = useState(false);

  const handleTitleInputChange = (e) => {
    onTitleChange(e.target.value);
  };

  const handleBlur = () => {
    setBlur(true);
  };

  useEffect(() => {
    if (storedTitle) {
      handleBlur();
      onTitleChange(storedTitle);
      setTitle(storedTitle);
    }
  }, [storedTitle, onTitleChange]);

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
        <GreenButton pageName={"Done"}>Done!</GreenButton>
      </form>
    </>
  );
};

export default SettingsForm;
