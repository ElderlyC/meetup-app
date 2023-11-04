import React, { useState } from "react";
import UserIdentifiers from "../../UserIdentifiers/UserIdentifiers";

function JoinMeetupModal({ eventData, link }) {
  const [userData, setUserData] = useState();
  const nameInput = document.getElementById("name")?.value;
  const noName = nameInput === "";
  const dupeName = eventData?.members.find(
    (member) => member.name === nameInput
  );

  const handleUserData = (data) => {
    console.log("set user data", data);
    setUserData(data);
  };

  const handleModalClose = () => {
    localStorage.setItem("userInfo", JSON.stringify(userData));

    const memberList = eventData.members;
    fetch(
      "https://meetup-mannaja-default-rtdb.firebaseio.com/meetups/" +
        link +
        "/members.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ...memberList,
          { name: userData.name, icon: userData.icon, colour: userData.colour },
        ]),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("SENT! Response from server:", data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
      });
  };

  return (
    <div>
      JoinMeetupModal{" "}
      <p>
        You are invited to Join <b>{eventData?.title} </b>
        by host <b>{eventData?.host}</b>!
      </p>
      Please enter your name and choose your icon
      {eventData && (
        <UserIdentifiers
          titleDisabled={true}
          onChangeData={handleUserData}
          initialTitle={eventData.title}
        />
      )}
      <button onClick={handleModalClose} disabled={noName || dupeName}>
        Join!
      </button>
      {dupeName && <p>A member already has that name!</p>}
    </div>
  );
}

export default JoinMeetupModal;
