import React, { useState } from "react";
import UserIdentifiers from "../../UserIdentifiers/UserIdentifiers";

function JoinMeetupModal({ tableData, link }) {
  const [userData, setUserData] = useState();
  const noName = document.getElementById("name")?.value === "";

  const handleUserData = (data) => {
    console.log("set user data", data);
    setUserData(data);
  };

  const handleModalClose = () => {
    localStorage.setItem("userInfo", JSON.stringify(userData));

    const memberList = tableData.members;
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
        You are invited to Join <b>{tableData?.title} </b>
        by host <b>{tableData?.host}</b>!
      </p>
      Please enter your name and choose your icon
      {tableData && (
        <UserIdentifiers
          titleDisabled={true}
          onChangeData={handleUserData}
          initialTitle={tableData.title}
        />
      )}
      <button onClick={handleModalClose} disabled={noName}>
        Join!
      </button>
    </div>
  );
}

export default JoinMeetupModal;
