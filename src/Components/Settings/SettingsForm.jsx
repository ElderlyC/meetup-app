import React, { useState } from "react";

const SettingsForm = () => {
  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0];

  // Calculate the previous Monday
  const firstMonday = new Date(today);
  const dayOfWeek = today.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  firstMonday.setDate(today.getDate() - daysUntilMonday);

  const threeWeeksLater = new Date(firstMonday);
  threeWeeksLater.setDate(threeWeeksLater.getDate() + 20);

  // Format the date as a string in "yyyy-MM-dd" format
  const firstMondayFormatted = firstMonday.toISOString().split("T")[0];
  const threeWeeksLaterFormatted = threeWeeksLater.toISOString().split("T")[0];

  const [dateRange, setDateRange] = useState({
    type: "Full Week",
    start: todayFormatted,
    end: threeWeeksLaterFormatted,
  });
  const handleDateChange = (identifier, value) => {
    console.log(identifier, value);
    setDateRange((prev) => {
      return { ...prev, [identifier]: value };
    });
  };

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
            <select
              value={dateRange.type}
              onChange={(event) => handleDateChange("type", event.target.value)}
            >
              <option>Full Week</option>
              <option>Weekdays</option>
              <option>Weekend</option>
              <option>Long Weekend (FSS)</option>
            </select>
          </div>

          <div>
            <label>Start of Selection Range</label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(event) =>
                handleDateChange("start", event.target.value)
              }
            />
          </div>

          <div>
            <label>End of Selection Range</label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(event) => handleDateChange("end", event.target.value)}
            />
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
