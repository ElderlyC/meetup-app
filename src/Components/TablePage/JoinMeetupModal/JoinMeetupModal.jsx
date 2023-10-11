import React from "react";
import UserIdentifiers from "../../UserIdentifiers/UserIdentifiers";

function JoinMeetupModal() {
  const handleModalClose = () => {
    console.log("close it up!");
  };

  const tempTitle = "retrieve this from firebase";
  return (
    <div>
      JoinMeetupModal
      <UserIdentifiers
        titleDisabled={true}
        onChangeData={(data) => console.log(data)}
        initialTitle={tempTitle}
      />
      <button onClick={handleModalClose}>Close Modal</button>
    </div>
  );
}

export default JoinMeetupModal;
