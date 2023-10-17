import React, { useState, useEffect } from "react";
import UserIdentifiers from "../../UserIdentifiers/UserIdentifiers";

function JoinMeetupModal({ link }) {
  const [tableData, setTableData] = useState();
  const [userData, setUserData] = useState();
  const noName = document.getElementById("name")?.value === "";

  const handleUserData = (data) => {
    console.log("set user data", data);
    setUserData(data);
  };

  const handleModalClose = () => {
    if (noName) {
      console.log("empty!");
    } else {
      console.log("close it up!");
      localStorage.setItem("userInfo", JSON.stringify(userData));
      window.location.reload();
    }
  };

  useEffect(() => {
    fetch(
      "https://meetup-mannaja-default-rtdb.firebaseio.com/table/" +
        link +
        ".json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        console.log("Title:", data.title);
        setTableData(data);
      });
  }, [link]);

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
