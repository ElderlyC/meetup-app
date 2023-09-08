import React from "react";

const SettingsForm = () => {
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
        <fieldset>
          <legend>Specify the range of days to choose from</legend>
          <div>
            <label>Selection Type</label>
            <select>
              <option>Full Week</option>
              <option>Weekdays</option>
              <option>Weekend</option>
              <option>Long Weekend (FSS)</option>
            </select>
          </div>

          <div>
            <label>Start of Selection Range</label>
            <input type="date" />
          </div>

          <div>
            <label>End of Selection Range</label>
            <input type="date" />
          </div>
        </fieldset>
        <div>
          <label>Meetup Description</label>
          <textarea
            placeholder="Activities, what to bring, other specific details about the meetup, etc."
            cols="40"
            rows="3"
          ></textarea>
        </div>
        <button>Done!</button>
      </form>
    </>
  );
};

export default SettingsForm;
