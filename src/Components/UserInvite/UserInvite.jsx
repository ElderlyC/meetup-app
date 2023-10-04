import React, { useState } from "react";

const UserInvite = () => {
  const [link, setLink] = useState();

  const handleCopy = () => {
    const inviteLink = document.getElementById("link").value;
    navigator.clipboard.writeText(inviteLink);
    // have another way of indicating copy worked !
    // alert("Link copied to clipboard: " + inviteLink);
  };

  return (
    <div>
      UserInvite
      <p>Invite Your Friends!</p>
      <div>
        <input
          id="link"
          readOnly={true}
          placeholder="Hover to reveal link"
          value={link}
        />
        <button onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default UserInvite;
