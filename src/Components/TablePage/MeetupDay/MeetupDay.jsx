import React, { useState, useEffect } from "react";

const MeetupDay = ({ eventData }) => {
  // Initialize variables to keep track of the date with the most attendees
  const [mostAttendeesDate, setMaxDate] = useState();
  const [bestDayVoters, setVoters] = useState();

  useEffect(() => {
    if (eventData) {
      let mostAttendeesCount = 0;
      for (const dateObject of eventData.dateArray) {
        const date = Object.keys(dateObject)[0];
        const attendees = dateObject[date].attendees;

        // Check if this date has more attendees than the current maximum
        if (attendees.length > mostAttendeesCount) {
          mostAttendeesCount = attendees.length;
          setMaxDate(date);
          setVoters(attendees.slice(1));
        }
      }
    }
  }, [eventData]);

  console.log(mostAttendeesDate);
  const meetupDay = mostAttendeesDate
    ? new Date(mostAttendeesDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No attendees yet!";

  return (
    <div>
      Meetup Day: {meetupDay}
      <p>(The earliest date with the most number of votes)</p>
      <p>
        Votes:{" "}
        {bestDayVoters &&
          bestDayVoters.map((voter) => {
            return <li>{voter}</li>;
          })}
      </p>
    </div>
  );
};

export default MeetupDay;
