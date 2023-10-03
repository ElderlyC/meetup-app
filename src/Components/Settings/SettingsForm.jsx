import React from "react";
import GreenButton from "../GreenButton/GreenButton";
import DateSelection from "./DateSelection";

const SettingsForm = ({ onDateChange }) => {
  return (
    <>
      <form>
        <div>
          <label>Meetup Title</label>
          <input />
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
