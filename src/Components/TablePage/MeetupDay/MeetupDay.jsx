import React, { useState, useEffect } from "react";
import { formatDate } from "../../SharedFunctions";
import classes from "./MeetupDay.module.css";

const MeetupDay = ({ eventData, link }) => {
  const [mostAttendeesDate, setMaxDate] = useState();
  const [bestDayVoters, setVoters] = useState();
  const [meetupDay, setMeetupDay] = useState(eventData?.meetupDay);

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

      setMeetupDay(mostAttendeesDate || "No attendees yet!");
    }
  }, [eventData, mostAttendeesDate]);

  const formattedMaxDate = mostAttendeesDate && formatDate(mostAttendeesDate);

  useEffect(() => {
    if (eventData && meetupDay) {
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
    }
  }, [link, meetupDay, eventData]);

  return (
    <div className={classes.container}>
      Meetup Day:
      <p className={classes.meetDay}>{formattedMaxDate}</p>
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
