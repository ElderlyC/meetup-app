import React, { useEffect, useState } from "react";
import GreenButton from "../../GreenLinkButton/GreenLinkButton";
import DateSelection from "../DateSelection/DateSelection";

const SettingsForm = ({ onDateChange, onTitleChange, link }) => {
  const storedTitle = localStorage.getItem("userInfo");
  const initialTitle = storedTitle ? JSON.parse(storedTitle).title : "";

  const [title, setTitle] = useState(initialTitle);
  const [blur, setBlur] = useState(false);

  const handleTitleInputChange = (e) => {
    onTitleChange(e.target.value);
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    setBlur(true);
  };

  useEffect(() => {
    if (initialTitle) {
      handleBlur();
      onTitleChange(initialTitle);
      setTitle(initialTitle);
    }
  }, [initialTitle, onTitleChange]);

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
        {title ? (
          <GreenButton url={`../${link}`} pageName={"Done"}>
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
