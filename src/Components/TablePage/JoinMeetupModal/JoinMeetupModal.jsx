import React, { useState } from "react";
import UserIdentifiers from "../../UserIdentifiers/UserIdentifiers";

function JoinMeetupModal({ tableData }) {
  const [userData, setUserData] = useState();
  const noName = document.getElementById("name")?.value === "";

  const handleUserData = (data) => {
    console.log("set user data", data);
    setUserData(data);
  };

  const handleModalClose = () => {
    console.log("close it up!");
    localStorage.setItem("userInfo", JSON.stringify(userData));
    window.location.reload();
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
