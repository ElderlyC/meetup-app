import React, { useEffect, useState } from "react";

const UserInvite = ({ title }) => {
  const [link, setLink] = useState("");
  const [randomNumber, setRandomNumber] = useState("");

  const handleCopy = () => {
    const inviteLink = document.getElementById("link").value;
    navigator.clipboard.writeText(inviteLink);
    // have another way of indicating copy worked !
    // alert("Link copied to clipboard: " + inviteLink);
  };

  useEffect(() => {
    setLink(() => {
      return title + randomNumber || randomNumber;
    });
  }, [title, randomNumber]);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 10000));
  }, []);

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
          required
        />
        <button onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default UserInvite;
