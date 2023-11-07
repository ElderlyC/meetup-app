import React, { useState, useEffect } from "react";
import classes from "./MeetupDay.module.css";

const MeetupDay = ({ eventData, link }) => {
  const [mostAttendeesDate, setMaxDate] = useState();
  const [bestDayVoters, setVoters] = useState();

  useEffect(() => {
    if (eventData?.dateArray) {
      let mostAttendeesCount = 0;
      for (const dateObject of eventData.dateArray) {
        const date = Object.keys(dateObject)[0];
        const attendees = dateObject[date].attendees;

        if (attendees.length - 1 > mostAttendeesCount) {
          mostAttendeesCount = attendees.length - 1;
          setMaxDate(date);
          setVoters(attendees.slice(1));
        }
        if (mostAttendeesCount === 0) {
          setMaxDate();
          setVoters();
        }
      }
    }
  }, [eventData]);

  const meetupDay = mostAttendeesDate
    ? new Date(mostAttendeesDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No attendees yet!";

  useEffect(() => {
    fetch(
      "https://meetup-mannaja-default-rtdb.firebaseio.com/meetups/" +
        link +
        "/meetupDay.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meetupDay),
      }
    );
  }, [link, meetupDay]);

  return (
    <div className={classes.container}>
      Meetup Day:
      <p className={classes.meetDay}>{meetupDay}</p>
      <p className={classes.label}>
        (The earliest date with the most number of votes)
      </p>
      <p className={classes.votes}>
        Votes: {bestDayVoters?.length}
        {bestDayVoters &&
          bestDayVoters.map((voter) => {
            return <li key={voter}>{voter}</li>;
          })}
      </p>
    </div>
  );
};

export default MeetupDay;
